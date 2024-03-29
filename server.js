require('dotenv').config();
const express = require('express');
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    console.log(`Stripe Secret Key is ${ process.env.STRIPE_SECRET_KEY ? "set" : "not set"}`);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to theBeautifulParent.com!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});