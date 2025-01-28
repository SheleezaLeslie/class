const http = require('http');
const port = 8000;
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello world');
        res.end();
    } else if (req.url === 'about') {
        res.write('about us');
        res.end();
    } else if (req.url === '/login') {
        res.write('login');
        res.end();
    } else if (req.url === '/register') {
        res.write('register');
        res.end();
    } else if (req.url === '/logout') {
        res.write('logout');
        res.end();
    } else {
        res.write('page not found');
        res.end();
    }
});
server.listen(8000, () => {
    console.log(`http://localhost:${port}`);
});
