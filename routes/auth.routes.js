const { Router } = require('express');
const { check } = require('express-validator');
const { loginPost} = require('../controllers/auth.controllers');
const { validateFields } = require('../middlewares/validateFields');



const router =Router()


router.post('/login',[
check('email', 'Email is required').isEmail(),
check('password', 'Password is required').not().isEmpty(),
validateFields


],loginPost);


module.exports = router;