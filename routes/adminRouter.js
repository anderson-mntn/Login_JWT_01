const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController')

router.get('/', auth, (req, res)=>{
    res.send('Token está correto, porem nao tem permissão, este dado só pode ser visto por um admin.')
});

module.exports = router;