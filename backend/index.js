require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const User = require("./schema/UserSchema");
const bodyParser = require("body-parser");
const cors = require("cors");
const { OAuth2Client } = require('google-auth-library');
const app = express();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

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


app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email, and password' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();

    console.log(newUser);
    res.status(201).json({ message: 'User created successfully', user: newUser });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.post('/google-login', async (req, res) => {
  const { idToken } = req.body;

  // console.log("Received Google ID Token:", idToken);  
  console.log("Received Google ID Token:");  

  if (!idToken) {
    return res.status(400).json({ message: 'Google ID token is required' });
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        email,
        password: null,  
      });
      await user.save();
    }

    res.status(200).json({ message: 'Login successful', user });

  } catch (error) {
    console.error('Google login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});