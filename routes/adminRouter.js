const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController')

router.get('/', auth, (req, res)=>{

    // req.user agora corresponde ao usuário verificado e podemos usar para verificar se é admin

    if(req.user.admin){
        res.send("Dados do admin")
    } else {
        res.status(401).send('Acesso negado: Este dado só pode ser visto por admin.')
    }

})

router.get('/free', auth,(req, res)=>{

    res.send('Este dados só deve ser visto quando se está logado.')

})
    

module.exports = router;