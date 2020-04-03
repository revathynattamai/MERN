const http = require('http');
let server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            if (body) res.end('<p>' + body + '</p>');
        })
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.end('<form method="POST"><label>Name</label><input type="text" name="username" /><button type="submit"></button></form>');
    }
});
server.listen(8080);