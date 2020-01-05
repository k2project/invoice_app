//loads environment variables from a .env file into process.env
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');// initialize our express app
// Imports routes for the products
const invoices = require('./routes/invoices.route');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/invoices', invoices);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
