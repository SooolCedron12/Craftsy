const express = require('express');
const router = express.Router();

const {login, register} = require('../controllers/usersControllers');

/* /users */
router.get('/login',login);
router.get('/register',register);


module.exports = router;