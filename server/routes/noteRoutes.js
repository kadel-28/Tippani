const express=require('express');
const {authenticateToken}=require('../middleware/auth-middleware')
const router= express.Router();
const {
    addNote,
    editNote,
    getAllNotes,
    deleteNote,
    isPinned
}=require('../controllers/noteControllers')

router.post('/addNote', authenticateToken, addNote);
router.put('/editNote/:noteId', authenticateToken, editNote);
router.delete('/deleteNote/:noteId', authenticateToken, deleteNote);
router.get('/getAllNotes', authenticateToken, getAllNotes);
router.put('/updatePin/:noteId', authenticateToken, isPinned);
 
module.exports=router;