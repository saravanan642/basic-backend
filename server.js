require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");

const Database = require("./config/db");
const listen = require("./config/listen");

const app = express();

let i;

for (i = 0; i < 5; i++) {
    console.log(i);
}

app.get("/", (req, res) => {
    res.send("i");
});

Database(mongoose);
listen(app);