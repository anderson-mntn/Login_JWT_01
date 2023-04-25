const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
    register: async function (req, res){

        // checando se email já está cadastrado, selectedUser é const do usuario já pego no db
        const selectedUser = await User.findOne({email: req.body.email});
        if (selectedUser) {
            return res.status(400).send("E-mail already in use")
        }

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password), //encripta senha para salvar no db
        })

        try{
            const savedUser = await user.save()
            res.send(savedUser);
        } catch (error){
            res.status(400).send(error);
        }
    },
    login: async function(req, res){
        const selectedUser = await User.findOne({email: req.body.email});
        if (!selectedUser) return res.status(400).send("E-mail or password incorrect.");

        const userAndPasswordMatch = bcrypt.compareSync(req.body.password, selectedUser.password);
        if(!userAndPasswordMatch) return res.status(404).send("E-mail or password do not matches.");
        // Se chegou aqui é pq logou.

        // Então depois de logado criamos o token
        const token = jwt.sign({_id: selectedUser._id}, process.env.TOKEN_SECRET)

        // enviando token através do header da res (key, value)
        res.header('authoriztion-token', token);


        res.send("User Logged in, welcome back " + selectedUser.name + "! ");


    },
}

module.exports = userController