// Este file vai retornar a verificação do token
const jwt = require('jsonwebtoken');


// também será usada como middleware para nossa rota,
// se ela nao for 200, já trava aqui mesmo e nao passa.
module.exports = function (req,res, next){
    const token = req.header('authorization-token');
    if(!token) return res.status(401).send('Acesso negado!')

    res.send('token recebido!')
}