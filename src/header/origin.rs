use hyper::header::{Header, HeaderFormat};
use hyper::header::shared::util::from_one_raw_str;
use std::fmt::{self, Show};
use std::ops::Deref;

/// Represents an Origin header
#[derive(PartialEq, Clone, Show)]
#[stable]
pub struct Origin(pub String);

#[stable]
impl Deref for Origin {
	type Target = String;
	#[stable]
    fn deref<'a>(&'a self) -> &'a String {
        &self.0
    }
}

impl Header for Origin {
	fn header_name(_: Option<Origin>) -> &'static str {
		"Origin"
	}

	fn parse_header(raw: &[Vec<u8>]) -> Option<Origin> {
		from_one_raw_str(raw).map(|s| Origin(s))
	}
}

impl HeaderFormat for Origin {
	fn fmt_header(&self, fmt: &mut fmt::Formatter) -> fmt::Result {
		let Origin(ref value) = *self;
        value.fmt(fmt)
	}
}
