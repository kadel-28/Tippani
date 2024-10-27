const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User = require('../models/userModel');
const { errorHandler } = require('../utilities');
require('dotenv').config();

const signUp = async (req, res) => {

    const {fullName, email, password}=req.body;

    try{
        if (!fullName ) {
            return res.status(400).json({ error: "Please enter your full-name." });
        }
        if (!email ) {
            return res.status(400).json({ error: "Please enter your email." });
        }

        if (!password ) {
            return res.status(400).json({ error: "Please enter your password." });
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

            const accessToken = jwt.sign({newUser}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "36000m",
            });

            if (newUser) {
                return res.status(201).json({ message: "User registered successfully" });
            }
        }
    }
    catch (error) {
        return res.status(500).json({ error: errorHandler(error) });
    }
}


const login = async (req, res) => {

    const {email, password}=req.body;

    try{
        if (!email ) {
            return res.status(400).json({ error: "Please enter your email." });
        }
        
        if (!password ) {
            return res.status(400).json({ error: "Please enter your password." });
        }

        const userInfo = await User.findOne({email:email});

        if (!userInfo) {
            return res.status(400).json({ error: "User is not registered" });
        } 
        const match = await bcrypt.compare(password, userInfo.password)

        if (!match){
            return res.status(500).json({ 
                error: true,
                message:"Invalid Credentials",
             });
        }
        else{

            const user={user:userInfo};
            const accessToken=jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn:"36000m"
            });

            return res.status(201).json({
                error: false,
                message: 'Successful Login',
                // email,
                // accessToken,
            });
        }
    }
    catch (error) {
        return res.status(500).json({ error: errorHandler(error) });
    }
}
module.exports={
    signUp,
    login
}

