const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

app.post('/login', (req, res) => {
    //user authentication
    const user = {id: 3};
    const token = jwt.sign({user}, 'secret_key');
    res.json({
        token: token
    });
});

app.get('/book', ensureToken, (req, res) => {
    jwt.verify(req.token, 'secret_key', (err,data)=>{
        if (err){
            res.sendStatus(403);
        }else{
        res.json({
            Text: 'Book',
            data: data
        })
    }})
});

app.get('/books', ensureToken, (req, res) => {
    jwt.verify(req.token, 'secret_key', (err,data)=>{
        if (err){
            res.sendStatus(403);
        }else{
            res.json({
                Text: 'Books',
                data: data
            })
        }})
});

function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}