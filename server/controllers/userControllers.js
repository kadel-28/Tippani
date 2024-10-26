const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User = require('../models/userModel');
const { errorHandler } = require('../utilities');

const signUp = async (req, res) => {

    const {fullName, email, password}=req.body;

    try{
        if (!fullName || !email ||!password) {
            return res.status(400).json({ error: "Please add all fields " });
        }

        const userExists = await User.findOne({email:email});

        if (userExists) {
            return res.status(400).json({ error: "User is already registered" });
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = await User.create({
                fullName: fullName.trim(),
                email: email.trim(),
                password: hashedPassword,
              });

            await newUser.save();

            if (newUser) {
                return res.status(201).json({ message: "Registered successfully. Please check your email to verify your account." });
            }
        }
    }
    catch (error) {
        return res.status(500).json({ error: errorHandler(error) });
    }
}
module.exports={signUp,}