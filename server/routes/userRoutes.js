const express=require('express');
const {authenticateToken}=require('../middleware/auth-middleware')
const router= express.Router();
const {
    signUp,
    login,
    getUser
}=require('../controllers/userControllers')

router.post('/signup', signUp);
router.post('/login', login); 
router.get('/getUser',authenticateToken, getUser); 

module.exports=router;