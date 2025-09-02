const http = require('http');

const hostname = '127.0.0.1';
const port = 3000; // may be changed if port is not free

const server = http.createServer((req, res) => {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!');
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            let numbers = 1;
            try {
                const data = JSON.parse(body);
                if (typeof data.numbers === 'number' && data.numbers > 0) {
                    numbers = data.numbers;
                } else {
                    res.statusCode = 405;
                    res.end('number parameter required');
                    return
                }
            } catch (e) {
                res.statusCode = 405;
                res.end(e.message);
                return
            }
            const randomNumbers = Array.from({ length: numbers }, () => Math.floor(Math.random() * 100));
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ randomNumbers }));
        });
    } else {
        res.statusCode = 405;
        res.end('Method Not Allowed');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
