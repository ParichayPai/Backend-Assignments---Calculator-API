const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/',(req,res) => {
    res.send("Hello world!");
});

app.post("/add", (req,res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if(parseFloat(num1) > 1000000 || parseFloat(num2) > 1000000){
        res.send({
            status: "Error",
            message: "Overflow",
            sum: undefined
        });
        return;
    }
    if(parseFloat(num2) < -1000000 || parseFloat(num1) < -1000000){
        res.send({
            status: "Error",
            message: "Underflow",
            sum: undefined
        });
        return;
    }
    if(!isNaN(parseFloat(num1))  && !isNaN(parseFloat(num1))) {
        res.send({
            status: "Success",
            message: "the sum of given two numbers",
            sum: parseFloat(num1) + parseFloat(num2)
        });
    }else if(isNaN(parseFloat(num1)) || isNaN(parseFloat(num1))){
        res.send({
            status: "failure",
            message: "Invalid datatypes",
            sum: undefined
        });
    }
});

app.post("/sub", (req,res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if(isNaN(parseFloat(num1)) || isNaN(parseFloat(num1))){
        res.send({
            status: "failure",
            message: "Invalid datatypes",
            sum: undefined
        });
        return;
    }
    if(parseFloat(num1) > 1000000 || parseFloat(num2) > 1000000){
        res.send({
            status: "Error",
            message: "Overflow",
            sum: undefined
        });
        return;
    }
    if(parseFloat(num2) < -1000000 || parseFloat(num1) < -1000000){
        res.send({
            status: "Error",
            message: "Underflow",
            sum: undefined
        });
        return;
    }
    if(!isNaN(parseFloat(num1))  && !isNaN(parseFloat(num1))) {
        res.send({
            status: "Success",
            message: "the sum of given two numbers",
            sum: parseFloat(num1) - parseFloat(num2)
        });
    }
});

app.post("/multiply", (req,res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if(isNaN(parseFloat(num1)) || isNaN(parseFloat(num1))){
        res.send({
            status: "failure",
            message: "Invalid datatypes",
            sum: undefined
        });
    }
    if(parseFloat(num1) > 1000000 || parseFloat(num2) > 1000000){
        res.send({
            status: "Error",
            message: "Overflow",
            sum: undefined
        });
        return;
    }
    if(parseFloat(num2) < -1000000 || parseFloat(num1) < -1000000){
        res.send({
            status: "Error",
            message: "Underflow",
            sum: undefined
        });
        return;
    }
    if(!isNaN(parseFloat(num1))  && !isNaN(parseFloat(num1))) {
        res.send({
            status: "Success",
            message: "the sum of given two numbers",
            sum: parseFloat(num1) * parseFloat(num2)
        });
    }
});

app.post("/divide", (req,res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if(parseFloat(num1) > 1000000 || parseFloat(num2) > 1000000){
        res.send({
            status: "Error",
            message: "Overflow",
            sum: undefined
        });
        return;
    }
    if(parseFloat(num2) < -1000000 || parseFloat(num1) < -1000000){
        res.send({
            status: "Error",
            message: "Underflow",
            sum: undefined
        });
        return;
    }
    if(parseFloat(num2) === 0){
        res.send({
            status: "Error",
            message: "Cannot divide by zero",
            sum: undefined
        });
        return;
    }
    if(!isNaN(parseFloat(num1)) && !isNaN(parseFloat(num1))) {
        res.send({
            status: "Success",
            message: "the sum of given two numbers",
            sum: parseFloat(num1) + parseFloat(num2)
        });
    }else if(isNaN(parseFloat(num1)) || isNaN(parseFloat(num1))){
        res.send({
            status: "failure",
            message: "Invalid datatypes",
            sum: undefined
        });
    }
});


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
