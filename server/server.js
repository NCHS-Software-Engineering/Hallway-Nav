const http = require("http");
const express = require("express");
const path = require("path");
const app = express();
const server = http.createServer(app);
const dotenv = require("dotenv");
dotenv.config({path: ".env"});
const port = process.env.Port || 8080;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 
        'http://localhost:3000'
    );
    next();
});
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/build")));

server.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
});