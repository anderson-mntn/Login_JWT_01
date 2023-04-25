const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController')

router.get('/', auth, (req, res)=>{
    res.send('Este dado só pode ser visto por um admin.')
});

module.exports = router;