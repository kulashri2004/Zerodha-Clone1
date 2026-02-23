require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');
const { SignupModel } = require("./model/SignupModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URI;

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(uri)
    .then(() => {
        console.log("Connected to MongoDB!");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error("MongoDB Connection Error:", err));

app.get('/addHoldings', async (req, res) => {
    try {
        let tempHoldings = [
            { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
            { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
            { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
            { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
            { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
            { name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%" },
            { name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%", isLoss: true },
            { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%" },
            { name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%", isLoss: true },
            { name: "SGBMAY29", qty: 2, avg: 4727.0, price: 4719.0, net: "-0.17%", day: "+0.15%" },
            { name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: true },
            { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: true },
            { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" }
        ];

        for (let item of tempHoldings) {
            let newHolding = new HoldingsModel(item);
            await newHolding.save();
            console.log("Saved:", newHolding);
        }

        res.send("Holdings added successfully!");
    } catch (error) {
        console.error("Error inserting holdings:", error);
        res.status(500).send("Error adding holdings: " + error.message);
    }
});

app.get('/addPositions', async (req, res) => {
    try {
        let tempPositions = [
            {
                product: "CNC",
                name: "EVEREADY",
                qty: 2,
                avg: 316.27,
                price: 312.35,
                net: "+0.58%",
                day: "-1.24%",
                isLoss: true,
            },
            {
                product: "CNC",
                name: "JUBLFOOD",
                qty: 1,
                avg: 3124.75,
                price: 3082.65,
                net: "+10.04%",
                day: "-1.35%",
                isLoss: true,
            },
        ];

        for (let item of tempPositions) {
            let newPosition = new PositionsModel(item);
            await newPosition.save();
            console.log("Saved:", newPosition);
        }

        res.send("Positions added successfully!");
    } catch (error) {
        console.error("Error inserting positions:", error);
        res.status(500).send("Error adding positions: " + error.message);
    }
});

app.get('/allHoldings', async(req, res) =>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions', async(req, res) =>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.get('/orders', async (req, res) => {
    try {
        const allOrders = await OrdersModel.find({});
        res.json(allOrders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Error fetching orders" });
    }
});

app.post('/newOrder', async (req, res) => {
    try {
        let newOrder = new OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
            status: "Pending",
        });

        await newOrder.save();
        res.json({ success: true, message: "Order saved!", order: newOrder });
    } catch (error) {
        console.error("Error saving order:", error);
        res.status(500).json({ success: false, message: "Error saving order" });
    }
});

app.post("/register", async (req, res) => {
    try {
        console.log("Received Registration Data:", req.body);
        const { number, password } = req.body;

        const existingUser = await SignupModel.findOne({ number });
        if (existingUser) {
            return res.status(400).json({ message: "User already registered!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new SignupModel({ number, password: hashedPassword });

        await newUser.save();
        res.json({ success: true, message: "User registered successfully!" });

    } catch (err) {
        console.error("Registration Error:", err);
        res.status(500).json({ success: false, message: "Error registering user", error: err.message });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { number, password } = req.body;

        const user = await SignupModel.findOne({ number });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found. Please register." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: "Invalid password!" });
        }

        res.json({ success: true, message: "Successfully logged in!" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Error during login", error: err.message });
    }
});
