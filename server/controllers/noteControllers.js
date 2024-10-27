const bcrypt=require('bcryptjs');
const jwt= require('jsonwebtoken');
const {errorHandler}=require("../utilities");
const Note = require("../models/noteModel");

const addNote = async(req,res)=>{
    const {title, content, tags}=req.body;

    const {user}= req.user;

    if (!title){
        return res.status(400).json({
            error: true,
            message:"Title is required."
        });
    }
    if (!content){
        return res.status(400).json({
            error: true,
            message:"Content is required."
        });
    }
    try{
        const note= new Note({
            title,
            content,
            tags: tags || [],
            userId: user._id,
        });

        await note.save();

        return res.json({
            error: false,
            note,
            message: "Note added Successfully",
        });
    }
    catch(error){
        return res.status(500).json({ error: errorHandler(error) });
    }
}

module.exports={
    addNote,
}