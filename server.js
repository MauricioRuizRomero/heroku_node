const express = require("express");
const cors = require("cors");
const app = express();
let port = process.env.PORT || 3000;

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
         msg: 'Waddup faggot',
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