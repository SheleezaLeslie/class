import express from 'express';

const router = express.Router();

//checking if in route
router.get('/', (req, res) => {
    res.send('welcome to lab router');
});

//name
router.get('/name', (req, res) => {
    res.send('Dani');
});

//greeting
router.get('/greeting', (req, res) => {
    res.send('Dani, but n01068571');
});

//add
router.get('/add/:x/:y', (req, res) => {
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);

    res.send(`${x + y}`);
});

//calculate
router.get('/calculate/:a/:b/:operation', (req, res) => {
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    let operation = req.params.operation;
    let result = 0;

    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '**':
            result = a ** b;
            break;
        case '/':
            result = a / b;
            if (result == 'Infinity') {
                res.send("Don't do this you fool");
            }
            break;

        default:
            res.send('invalid operator');
            break;
    }
    res.send(`${result}`);
});

export default router;