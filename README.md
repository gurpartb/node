# node
{
  "College": "Udemy",
  "Instructor": "Anthony Alicea",
  "Subject": "node tutorial"
}

BIG WORD ALERT!!
{
"Template Literal": "A way to concatenate strings in JavaScript(ES6). Easier to work with than a bunch of strings concatenated with + ",

"Syntactic Sugar": "A feature that only changes how you type something, but nothing changes under the hood. It's important to understand what is happening under the hood, so we don't make decisions based on flawed assumptions.",

"Asynchronous": "More than one process running simultaneously. Node does things acynchronously. V8 does not.",

"Synchronous": "One process at a time. JavaScript is synchronous. Think of it as only one line of code executing at a time. NodeJS is asynchronous.",

"Callback": "A function passed to some other function, which we assume will be invoked at some point. The function -calls back- invoking the function you give it when it is done doing its work.",

"Non-Blocking": "Doing other things without stopping your programming from running. This is made possible by Node's doing things asynchronously.",

"Buffer": "A Temprorary holding spot fro data being moved from one place to another. Intentionally limited to size.",

"Stream": "A sequence of data made available over time. Pieces of data that eventually combine into a whole. Streams are event emitter EE, per stream.js",

"Binary Data": "Data stored in Binary (sets of 1s and 0s). The core of the math that computers are based on. Each one or zero is called a 'bit' or 'binary digit'.",

"Character Set": "Representation of Characters as numbers. Each character gets a number. Unicode and ASCII are character sets.",

"Character Encoding": "How characters are stored in Binary. The numbers (or code points) are converted and stored in binary.",

"Byte": "8 Bits. 00101100",

"Error-First Callback": "Callbacks take an error object as their first parameter. -null- if no errorl, otherwise will contain an object defining the error. This is a standard so we know in what order to place our parameters for our callbacks.",

"Chunk": "A piece of data being sent through a stream. Data is split in 'chunks' and streamed."

"Readable": "Readable inherits from a stream. Therefore, its type of stream and also a stype of event emitter EE.",

"Readstream": "Readstream inherits from readable",

"Abstract (Base) Class": "A type of constructor you never work directly with, but inherit from. We create new custom objects which inherit from the abstract base class.",

"Pipe": "Connecting two streams by writing to one stream what is being read from another. In Node you pipe from a Readable stream to a writeable stream.",

"Method Chaining": "A method returns an object so we can keep calling more methods. Sometimes if returns the parent object (called 'cascading') an sometimes some other object.",

"Protocol": "A set of rules two sides agree on to use when communicating. Both the client and server are programmed to understand and use that particular set of rules. It's similar to two people from different countries agreeing on a language to speak in.",

"TCP": "Transmission Control Protocol.",

"Port": "Once a computer receives a packet, how it knows what program to send it to. When a program is setup on the operating system to receive packets from a particular port, it is said that the program is 'listening' to that port.",

"HTTP": "A set of rules (and a format) for data being transferred on the web. Stands for 'HyperText Protocol'. It's a format (of various) defining data being tranferred via TCP/IP.",

"MIME type": "A standard for specifying the type of data being sent. Stands for 'Multipurpose Internet Mail Extensions'. Examples: application/json, text/html, image/jpeg.",

"Template": "Text designed to be the basis for final text or content after being prcessed. There's usually some specific template language, so the template system knows how to replace placeholders with real values.",

"API": "A set of tools for building a software application. Stands for 'Application Programming Interface'. On the web the tool are usually made available via a set of URLs which accept and send only data via HTTP and TCP/IP.",

"Endpoint": "One URL in a web API. Sometimes that endpoint (URL) does multiple thing by making choices based on the HTTP request headers.",

"Serialize": "Translating an object into a format that can be stored or transferred. JSON, CSV, XML, and others are popular. 'Deserialize' is the opposite (conversting the format back into an object).",

"Routing": "Mapping http requests to content. Whether actual files that exist on the server, or not.",
}