const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

// router.post('/login', (req,res) =>{
//     res.send('login success');
// });

// router.post('/signup', (req,res) =>{
//     res.send('signup success');
// });

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;