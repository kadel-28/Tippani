const express = require('express');
const cors = require('cors');
const app=express();
require('dotenv').config();
const mongoose = require('mongoose');
const config = require("./config.json");
const jwt=require('jsonwebtoken');
const {authenticateToken} =require('./utilities')
const User = require('./models/userModel')
const bcryptjs = require('bcryptjs')
const validator = require('validator')

mongoose.connect(config.connectionString);

app.use(express.json());

app.use(
    cors({
        origin:"*",
    })
);

mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000 // Timeout after 5 seconds instead of 10
  }
    
).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

app.listen(8000);

module.exports=app;
