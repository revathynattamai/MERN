const express = require('express');
const app = express();


app.use((req, res, next) => {
    let body = '';
    req.on('end', () => {
        if (body) {
            req.body = body;
        }
        next();
    })
    // next(); Donot use here
    req.on('data', (chunk) => {
        body += chunk;
    });
})


app.use((req, res, next) => {
    if (req.body) {
        return res.send('<p>' + req.body + '</p>');
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.send('<form method="POST"><label>Name</label><input type="text" name="username" /><button type="submit">Submit</button></form>');
    }
});



app.listen(8080);