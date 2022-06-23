const express = require("express");
const cors = require("cors");
const app = express();
let port = 8080;

app.use(cors());
app.use(express.json());

app.all('*',function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","PUT,GET,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","Content-Type");
    next();
});

app.get("/api", function (req, res) {
    res.send(
        {
         msg: 'Hello',
         content: 'Welcome to my API :)'
         });
});

app.post("/post", function (req, res) {
    let body = req.body;
    res.send({
        msg: 'Hello',
        content: `${body.message}`
    })
});

app.listen(port, () => {
    console.log("Listen Port " + port);
});