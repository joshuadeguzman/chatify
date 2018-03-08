## Chatify

A simple chat app created with socket.io

## Features

- [x] Realtime chat
- [x] Client Id/Nickname saving
- [x] Lightweight
- [x] Responsive UI

## Prerequisites

- [NodeJS](https://nodejs.org/en/) -  is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
- [SocketIO](https://socket.io/) - Socket.IO enables real-time bidirectional event-based communication.
It works on every platform, browser or device, focusing equally on reliability and speed.
- [ExpressJS](https://expressjs.com/) - is a minimal and flexible Node.js web application framework that provides a 
robust set of features for web and mobile applications.
- Optional tools
  - **[ngrok](https://ngrok.com/) -** a secure introspectable tunnels to localhost webhook development tool and debugging tool.
  - **[Inspinia Theme](https://github.com/Chuibility/inspinia) -** is a premium admin dashboard template with flat design concept. It is fully responsive admin dashboard template built with Bootstrap 3+ Framework, HTML5 and CSS3, Media query. 
  
## Installation

### NodeJS

- Binaries, installers, and source tarballs are available at https://nodejs.org.

### Socket.IO

```bash
$ npm install socket.io
```

### ExpressJS

```bash
$ npm install express --save
```

> To install only for dev environment 

```bash
$ npm install express --dev
```

Then, run the following command:

```bash
$ node server.js
```

### ngrok (optional)

Go to their website, and download the client application https://ngrok.com/download.

```bash
$ unzip /path/to/ngrok.zip
```

#### Start it up

Read the [documentation](https://ngrok.com/docs/2) on how to use ngrok. Try it out by running it from the command line:

```bash
$ ./ngrok help
```

To start a HTTP tunnel on port 8000, run this next:

```bash
$ ./ngrok http 8000
```

Then, serve it, copy the generated url, share it with your friends.

## Examples

See [Screenshots](https://github.com/devjdg/chatify/tree/master/Screenshots)

## License

Chatify is under the [Creative Commons License 3.0](https://creativecommons.org/licenses/by/3.0/)
