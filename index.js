const express = require("express")
const app = express()
const path = require('path');

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const hostname = '0.0.0.0';
const port = 5900;

app.listen(port, hostname, () => {
    console.log(`Server live at http://${hostname}:${port}/`);
});


app.use((req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    if (err.status === 404 || err.status === 500 || err.status === 502 || err.status === 503 || err.status === 504) {
        res.sendFile(__dirname + '/public/404.html');
    } else if (err.status === 401 || err.status === 403 || err.status === 405) {
        res.sendFile(__dirname + '/public/401.html');
    } else {
        next(err);
    }
});