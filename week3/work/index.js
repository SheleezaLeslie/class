import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// CRUD -> server is set up to do these things
// methods: GET/POST/PUT/DELETE (RCUD)

// first argument is endpoint (what is being called), second is task to complete
app.get('/', (req,res) => {
    res.send('Welcome to the server - GET');
});

app.post('/', (req,res) => {
    res.send('Welcome to the server - POST'); 
});

app.put('/', (req,res) => {
    res.send('Welcome to the server - PUT'); 
});

app.delete('/', (req,res) => {
    res.send('Welcome to the server - DELETE');
});

app.get('/search', (req,res) => {
    console.log(req.url);
    console.log(req.headers);
    console.log(req.query);
    console.log(req.params);
    console.log(req.url);

    res.send('/search route yippee');
});

app.get('/item/:itemID', (req,res) => {
    // more = /item/:itemID/:anotherID
    console.log(req.url);
    console.log(req.headers);
    console.log(req.query);
    console.log(req.params);
    console.log(req.url);

    res.send('/item route yippee');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});