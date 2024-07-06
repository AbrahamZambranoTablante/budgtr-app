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
    res.json(
        {
            welcome_to: "Budgtr App Backend Server",
            developed_by: "Abraham Zambrano T."
        });
});

app.get("*", (req, res) => {
    res.status(404).json({error_code: "404 Not Found"});
});


module.exports = app;


