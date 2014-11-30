#[phase(plugin)]
extern crate regex_macros;
extern crate regex;

use super::util::{sha1, ReadUntilStr, HeaderCollection, ReadHttpHeaders, WriteHttpHeaders};
use super::check::CheckWebSocketHeader;
use serialize::base64::{ToBase64, STANDARD};
use std::io::{Reader, Writer, IoResult};
use std::string::ToString;
use std::clone::Clone;

static MAGIC_GUID: &'static str = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";

/// Represents a WebSocket response from a server
pub struct WebSocketResponse {
	/// The status code of the response (for a successful handshake, this should be 101)
	pub status_code: uint,
	/// The human readable reason phrase for the status code (E.g. Switching Protocols)
	pub reason_phrase: String,
	/// The collection of headers contained in this WebSocket response
	pub headers: HeaderCollection,
}

impl WebSocketResponse {
	/// Create a new WebSocket response based on the base-64 encoded key from a client.
	pub fn new(key: &str, protocol: Option<String>) -> WebSocketResponse {
		let accept = WebSocketResponse::gen_accept(key.to_string());
		
		let status_code = 101;
		let reason_phrase = "Switching Protocols".to_string();
		
		let mut headers = HeaderCollection::new();
		headers.insert("Upgrade", "websocket");
		headers.insert("Connection", "Upgrade");
		headers.insert("Sec-WebSocket-Accept", accept);
		
		match protocol {
			Some(protocol) => { headers.insert("Sec-WebSocket-Protocol", protocol); }
			None => { }
		}
		
		WebSocketResponse {
			status_code: status_code,
			reason_phrase: reason_phrase,
			headers: headers,
		}
	}
	
	/// Generates the handshake Sec-WebSocket-Accept value from
	/// the given Sec-WebSocket-Key.
	pub fn gen_accept<A: ToString>(key: A) -> String {
		let concat_key = key.to_string() + MAGIC_GUID.to_string();
		let digested = sha1(concat_key.into_bytes().as_slice());
		digested.to_base64(STANDARD)
	}
	
	/// Returns true if this response indicates a successful handshake
	/// This function will check that the Sec-WebSocket-Accept header of
	/// the response matches up with the expected value from the given key.
	pub fn is_successful(&self, key: String) -> bool {
		self.status_code == 101 && self.headers.check_response() && self.headers.get("Sec-WebSocket-Accept").unwrap() == WebSocketResponse::gen_accept(key.to_string())
	}
}

impl Clone for WebSocketResponse {
	fn clone(&self) -> WebSocketResponse {
		WebSocketResponse {
			status_code: self.status_code,
			reason_phrase: self.reason_phrase.clone(),
			headers: self.headers.clone(),
		}
	}
}

pub trait ReadWebSocketResponse {
	fn read_websocket_response(&mut self) -> IoResult<WebSocketResponse>;
}

impl<R: Reader> ReadWebSocketResponse for R {
	fn read_websocket_response(&mut self) -> IoResult<WebSocketResponse> {
		let status_line = try!(self.read_until_str("\r\n", false));
		
		let re = regex!(r"HTTP/\d+\.?\d (\d\d\d) (.*)");
		let captures = re.captures(status_line.as_slice()).unwrap();
		
		let status_code: Option<uint> = from_str(captures.at(1));
		let reason_phrase = captures.at(2).to_string();
		let headers = try!(self.read_http_headers());
		
		Ok(WebSocketResponse {
			status_code: status_code.unwrap(),
			reason_phrase: reason_phrase,
			headers: headers,
		})
	}
}

pub trait WriteWebSocketResponse {
	fn write_websocket_response(&mut self, response: &WebSocketResponse) -> IoResult<()>;
}

impl<W: Writer> WriteWebSocketResponse for W {
	fn write_websocket_response(&mut self, response: &WebSocketResponse) -> IoResult<()> {
		let status_line = "HTTP/1.1 ".to_string() + response.status_code.to_string() + " " + response.reason_phrase;
		
		try!(self.write_str(status_line.as_slice()));
		try!(self.write_str("\r\n"));
		try!(self.write_http_headers(&(response.headers)));
		try!(self.write_str("\r\n"));
		
		Ok(())
	}
}