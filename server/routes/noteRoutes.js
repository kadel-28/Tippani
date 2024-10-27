const express=require('express');
const {authenticateToken}=require('../middleware/auth-middleware')
const router= express.Router();
const {
    addNote
}=require('../controllers/noteControllers')

router.post('/addNote', authenticateToken, addNote);

module.exports=router;