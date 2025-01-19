require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

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

app.get('/allHoldings',async (req,res) => {
    let allHoldings = await HoldingsModel.find({})
    res.json(allHoldings);
});

app.get('/allPositions',async (req,res) => {
    let allPositions = await PositionsModel.find({})
    res.json(allPositions);
});

app.post("/newOrder",async(req,res) =>{
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode
    });
    newOrder.save();
    res.send("Orders Saved!");
});

app.get("/orders", async (req, res) => {
    try {
      const orders = await OrdersModel.find();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch orders" });
    }
});

app.delete("/orders/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedOrder = await OrdersModel.findByIdAndDelete(id);
      if (!deletedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete order" });
    }
  });

async function main(params) {
    mongoose.connect(uri);
}

