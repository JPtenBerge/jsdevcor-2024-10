const fs = require('fs');
const http = require('http');
// const tcp = require('net');

fs.readFile('boek.txt', 'utf8', (err, content) => {
	console.log('content:', content);
});

// I/O
// packages laagdrempelig
// frontenders backenders samenwerken
// toolchains CLI
// weinig Enterprise backends

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end(`<h1>Welkom!</h1><p>Wauw dit werkt</p>`);
});
server.listen(1337);

// structuur  webframeworks Node.js
// - Express - beetje structuur - slechte TypeScript
// - Hapi
// - Meteor
// - socket.io (realtime)
// - Nest.js (rijke architectuur, DI)
// - Fastify