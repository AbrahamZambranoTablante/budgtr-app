//create all var needed and import express and data
const express = require("express");
const transaction = express.Router();
const transactionsData = require("../Models/transaction");

//index all transactions (GET REQ)
transaction.get("/", (req, res) => {
    if(transactionsData.length < 1){
        res.status(404).redirect("/not-found");
    } else {
        res.status(200).json(transactionsData);
    }
});

//show one transaction (GET REQ)
transaction.get("/:id", (req, res) => {
    const { id } = req.params;
    const foundTransaction = transactionsData.find(trans => trans.id === id);
    if(!foundTransaction){
        res.status(404).redirect("/not-found");
    } else {
        res.status(200).json(foundTransaction);
    }
})

module.exports = transaction;
