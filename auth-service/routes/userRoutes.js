const express = require('express');
const { register, login, getuser, logout } = require('../controllers/userController');
const auth = require('../middleware/authmiddleware');

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get('/getuser',auth ,getuser)
router.get('/logout',logout)

module.exports = router;