//Import libraries functions and set up vars
const express = require("express");
const cors = require("cors");
const app = express();

//middleware
app.use(express.json());

//enable permissions for extrating data from external sources
app.use(cors());

//Routes

//Root page or landing page
app.get("/", (req, res) => {
    res.send("welcome to Budgtr server");
});

module.exports = app;


