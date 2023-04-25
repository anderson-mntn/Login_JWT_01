const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const userController = {
    register: async function (req, res){

        const checkUniqueEmail = await User.find({email: req.body.email});
        if (checkUniqueEmail) return res.status(404).send("E-mail already in use")

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
        })

        try{
            const savedUser = await user.save()
            res.send(savedUser);
        } catch (error){
            res.status(400).send(error);
        }
    },
    login: function(req, res){
        console.log('login!');
        res.send('Login!');
    },
}

module.exports = userController