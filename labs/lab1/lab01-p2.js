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
        // sync to make sure things are sent in order
        // make html readFileSync, put index page html in there
        res.write('eeeeeeeeeeee');
        res.end(webpage);
    } else if (req.url === '/about') {
        const webpage = fs.readFileSync(path.join(__dirname, 'html', 'about.html'));
        res.write('wwwwwwwwwwwwwwwwwwwords');
        res.end(webpage);
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
        res.write('page not foundaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        res.end();
    }
});
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});