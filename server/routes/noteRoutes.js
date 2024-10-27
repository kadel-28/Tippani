const express=require('express');
const {authenticateToken}=require('../middleware/auth-middleware')
const router= express.Router();
const {
    addNote,
    editNote,
    getAllNotes,
    deleteNote
}=require('../controllers/noteControllers')

router.post('/addNote', authenticateToken, addNote);
router.put('/editNote/:noteId', authenticateToken, editNote);
router.delete('/deleteNote/:noteId', authenticateToken, deleteNote);
router.get('/getAllNotes', authenticateToken, getAllNotes);

module.exports=router;