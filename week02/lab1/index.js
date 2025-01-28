import http from 'http';
import fs from 'fs';

const port = 8000;
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        let webpage = fs.readFileSync('homepage.html');

        res.write(webpage);
        res.end();
    } else if (req.url === 'about') {
        res.write('about about about about us');
        res.end();
    } else if (req.url === '/user/accound/id') {
        res.write('aaaaa iiiiii oooooooo');
        res.end();
    } else if (req.url === '/register') {
        res.write('register');
        res.end();
    } else if (req.url === '/logout') {
        res.write('logout');
        res.end();
    } else {
        res.write('page not found aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        res.end();
    }
});
server.listen(8000, () => {
    console.log(`http://localhost:${port}`);
});
