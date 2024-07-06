//create all var needed and import express and data
const express = require("express");
const transaction = express.Router();
const transactionsData = require("../Models/transaction");
const { nanoid } = require("nanoid");


//index all transactions (GET REQ)
transaction.get("/", (req, res) => {
    if(transactionsData.length < 1){
        res.status(404).json({error_code: "404 Not Found"});
    } else {
        res.status(200).json(transactionsData);
    }
});

//show one transaction (GET REQ)
transaction.get("/:id", (req, res) => {
    const { id } = req.params;
    const foundTransaction = transactionsData.find(trans => trans.id === id);
    if(!foundTransaction){
        res.status(404).json({error_code: "404 Not Found"});
    } else {
        res.status(200).json(foundTransaction);
    }
});

//create one new transaction (POST REQ)
transaction.post("/", (req, res) => {
    const incomingTrans = {id:nanoid(8), ...req.body};
    transactionsData.push(incomingTrans);
    res.status(201).json(transactionsData[transactionsData.length - 1]);
});

//remove one specific transaction from data (DELETE REQ)
transaction.delete("/:id", (req, res) => {
    const { id } = req.params;
    const indexToRemove = transactionsData.findIndex(trans => trans.id === id);

    if(indexToRemove !== -1){
        transactionsData.splice(indexToRemove, 1);
        res.status(200).redirect("/transactions");
    } else {
        res.status(404).json({error_code: "404 Not Found"});
    };
});

//update the key values from one specific transaction (PUT REQ)
transaction.put("/:id", (req, res) => {
    const { id } = req.params;
    const indexToUpdate = transactionsData.findIndex(trans => trans.id === id);

    if(indexToUpdate !== -1){
        transactionsData[indexToUpdate] = {...transactionsData[indexToUpdate], ...req.body};
        res.status(214).json(transactionsData[indexToUpdate]);
    } else {
        res.status(404).json({error_code: "404 Not Found"});
    };
});

module.exports = transaction;
