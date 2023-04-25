// Este file vai retornar a verificação do token
const jwt = require('jsonwebtoken');


// também será usada como middleware para nossa rota,
// se ela vier sem header já para aqui mesmo.
module.exports = function (req, res, next){
    const token = req.header('authorization-token');
    if(!token) return res.status(401).send('Acesso negado: Não veio com token no header');


    // Verificando validade do token recebido
    try {
        const userVerified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = userVerified;
        next(); //faz passar para o próximo parametro de ../router/adminRouter router.get('/', ...)
    } catch (error) {
        res.status(401).send('Houve uma falha na autenticação: Token inválido.')
    }
}