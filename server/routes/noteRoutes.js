const express=require('express');
const {authenticateToken}=require('../middleware/auth-middleware')
const router= express.Router();
const {
    addNote,
    editNote,
    getAllNotes
}=require('../controllers/noteControllers')

router.post('/addNote', authenticateToken, addNote);
router.put('/editNote/:noteId', authenticateToken, editNote);
router.get('/getAllNotes', authenticateToken, getAllNotes);

module.exports=router;