const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

//Faremos uma rota pra registrar novo usuário e outra para login, usaremos método POST

router.post('/register', userController.register);
router.post('/login', userController.login);


module.exports = router;