// home page
// about us
// contact
// login
// register
// details
// search page

import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = process.env.PORT || 8000;
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const webpage = fs.readFileSync('./pages/homepage.html');
        // sync to make sure things are sent in order
        // make html readFileSync, put index page html in there
        res.end(webpage);
    } else if (req.url === '/about') {
        const webpage = fs.readFileSync(path.join('./pages/about.html'));
        res.end(webpage);
    } else if (req.url === '/login') {
        const webpage = fs.readFileSync(path.join('./pages/login.html'));
        res.end(webpage);
    } else if (req.url === '/register') {
        const webpage = fs.readFileSync(path.join('./pages/register.html'));
        res.end(webpage);
    } else if (req.url === '/logout') {
        const webpage = fs.readFileSync(path.join('./pages/logout.html'));
        res.end(webpage);
    } else {
        res.write('page not foundaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        res.end();
    }
});
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});