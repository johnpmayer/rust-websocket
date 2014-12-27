(function() {var implementors = {};
implementors['openssl'] = ["<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a> for <a class='struct' href='openssl/bio/struct.MemBio.html' title='openssl::bio::MemBio'>MemBio</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a> for <a class='struct' href='openssl/crypto/hash/struct.Hasher.html' title='openssl::crypto::hash::Hasher'>Hasher</a>","<a class='stability Experimental' title='Experimental'></a>impl&lt;S: <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Stream.html' title='std::io::Stream'>Stream</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a> for <a class='struct' href='openssl/ssl/struct.SslStream.html' title='openssl::ssl::SslStream'>SslStream</a>&lt;S&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;S&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a> for <a class='enum' href='openssl/ssl/enum.MaybeSslStream.html' title='openssl::ssl::MaybeSslStream'>MaybeSslStream</a>&lt;S&gt;",];
implementors['hyper'] = ["<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a> for <a class='struct' href='hyper/client/request/struct.Request.html' title='hyper::client::request::Request'>Request</a>&lt;<a class='struct' href='hyper/net/struct.Streaming.html' title='hyper::net::Streaming'>Streaming</a>&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;W: <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a> for <a class='enum' href='hyper/http/enum.HttpWriter.html' title='hyper::http::HttpWriter'>HttpWriter</a>&lt;W&gt;","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;<a class='trait' href='hyper/net/trait.NetworkStream.html' title='hyper::net::NetworkStream'>NetworkStream</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/kinds/trait.Send.html' title='core::kinds::Send'>Send</a>&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a> for &amp;'a mut <a class='trait' href='hyper/net/trait.NetworkStream.html' title='hyper::net::NetworkStream'>NetworkStream</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a> for <a class='enum' href='hyper/net/enum.HttpStream.html' title='hyper::net::HttpStream'>HttpStream</a>","<a class='stability Experimental' title='Experimental'></a>impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a> for <a class='struct' href='hyper/server/response/struct.Response.html' title='hyper::server::response::Response'>Response</a>&lt;'a, <a class='struct' href='hyper/net/struct.Streaming.html' title='hyper::net::Streaming'>Streaming</a>&gt;",];
implementors['websocket'] = ["<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a> for <a class='enum' href='websocket/common/stream/enum.WebSocketStream.html' title='websocket::common::stream::WebSocketStream'>WebSocketStream</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a> for <a class='struct' href='hyper/client/request/struct.Request.html' title='hyper::client::request::Request'>Request</a>&lt;<a class='struct' href='hyper/net/struct.Streaming.html' title='hyper::net::Streaming'>Streaming</a>&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;W: <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a> for <a class='enum' href='hyper/http/enum.HttpWriter.html' title='hyper::http::HttpWriter'>HttpWriter</a>&lt;W&gt;","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;<a class='trait' href='hyper/net/trait.NetworkStream.html' title='hyper::net::NetworkStream'>NetworkStream</a>&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a> for &amp;'a mut <a class='trait' href='hyper/net/trait.NetworkStream.html' title='hyper::net::NetworkStream'>NetworkStream</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a> for <a class='enum' href='hyper/net/enum.HttpStream.html' title='hyper::net::HttpStream'>HttpStream</a>","<a class='stability Experimental' title='Experimental'></a>impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/std/io/trait.Writer.html' title='std::io::Writer'>Writer</a> for <a class='struct' href='hyper/server/response/struct.Response.html' title='hyper::server::response::Response'>Response</a>&lt;'a, <a class='struct' href='hyper/net/struct.Streaming.html' title='hyper::net::Streaming'>Streaming</a>&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
