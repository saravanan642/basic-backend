require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");

const Database = require("./config/db");
const listen = require("./config/listen");
const  Registerdata = require("./models/register")
const app = express();



app.use(express.json());
Database(mongoose); 
listen(app);
app.use(Registerdata)