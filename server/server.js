// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const connectDb = require("./config/dbConnection");

connectDb();

const app = express();
const port = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(bodyParser.json());


const authRoutes = require('./routes/userRouter');


app.use('/api/user', authRoutes);


// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});