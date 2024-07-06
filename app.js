//Import libraries functions and set up vars
const express = require("express");
const cors = require("cors");
const app = express();

//middleware
app.use(express.json());

//enable permissions for extrating data from external sources
app.use(cors());

//Routes

//Bugtr index route and import get req with all transactions
const transactionsController = require("./Controllers/budgtrController");
app.use("/transactions", transactionsController);

//Root page or landing page and not found
app.get("/", (req, res) => {
    res.send("welcome to Budgtr server");
});

app.get("*", (req, res) => {
    res.send(`<h1>404 NOT FOUND</h1>`);
})


module.exports = app;


