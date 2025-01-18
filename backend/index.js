require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const app = express();

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;

main().then( () =>{
   console.log("Database Connected.");
}).catch((e)=>{
    console.log(e);
})

app.listen(port,()=>{
    console.log("App started");
})

async function main(params) {
    mongoose.connect(uri);
}

