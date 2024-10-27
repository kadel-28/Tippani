const express = require('express');
const cors = require('cors');
const app=express();
require('dotenv').config();
const mongoose = require('mongoose');
const config = require("./config.json");
const jwt=require('jsonwebtoken');
const userRoutes = require('./routes/userRoutes')
const noteRoutes = require('./routes/noteRoutes');
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
    serverSelectionTimeoutMS: 30000,
  }
    
).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

app.use('/user', userRoutes);
app.use("/note", noteRoutes);

app.listen(8000);

module.exports=app; 