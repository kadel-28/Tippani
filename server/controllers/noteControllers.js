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
            message: "Note added Successfully",
        });
    }
    catch(error){
        return res.status(500).json({ error: errorHandler(error) });
    }
}

const editNote = async(req, res)=>{
    const noteId= req.params.noteId;
    const {title, content, tags, isPinned}=req.body;
    const {user}=req.user;

    if (!title && !content ) {
        return res.status(400).json({
            error: true,
            message: "Fields cannot be left empty."
        })
    }


    try {
        const note = await Note.findOne({_id:noteId, userId:user._id});

        if (!note){
            return res.status(404).json({
                error: true,
                message:"Note not Found"
            });
        }
        if (title) note.title=title;
        if (content) note.content=content;
        if (tags) note.tags=tags;
        if (isPinned) note.isPinned=isPinned;

        await note.save();

        return res.status(200).json({
            error: false,
            message:"Notes updated Successfully"
        });
        
    } catch (error) {
        return res.status(500).json({ error: errorHandler(error) });
    }
}

const getAllNotes = async(req, res)=>{

    const {user}= req.user;

    try {
        const notes = await Note.find({userId: user._id}).sort({isPinned: -1});
        return res.status(400).json({
            error: false,
            message: "Notes Retrieved Successfully",
        });


    } catch (error) {
        return res.status(500).json({ error: errorHandler(error) });
    }

}

const deleteNote = async(req, res)=> {
    const noteId= req.params.noteId;
    const {user}= req.user;

    try {
        const note = await Note.findOne({
            _id: noteId, 
            userId: user._id
        })
    
        if (!note){
            return res.status(404).json({
                error: true,
                message: "Note Not Found"
            });
        }

        await Note.deleteOne({_id: noteId, userId: user._id});

        return res.status(200).json({
            error: false, 
            message:"Note deleted Successfully"
        });

    } catch (error) {
        return res.status(500).json({ error: errorHandler(error) });
    }
}

const isPinned = async (req, res)=>{
    const noteId= req.params.noteId;
    const {isPinned}=req.body;
    const {user}=req.user;

    try {
        const note = await Note.findOne({_id:noteId, userId:user._id});

        if (!note){
            return res.status(404).json({
                error: true,
                message:"Note not Found"
            });
        }

        if (isPinned) note.isPinned=isPinned;

        await note.save();

        return res.status(200).json({
            error: false,
            message:"Notes updated Successfully"
        });
        
    } catch (error) {
        return res.status(500).json({ error: errorHandler(error) });
    }
}

module.exports={
    addNote,
    editNote,
    getAllNotes,
    deleteNote,
    isPinned
}