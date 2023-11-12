const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');
const {getUsers}= require('../controllers/adminController');
const {checkRoles} = require('../middlewares/checkRole')



router.post('/register', registerUser);
router.get('/roles',checkRoles(['admin','faculty']),getUsers);


module.exports = router;
