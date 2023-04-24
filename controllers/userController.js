const userController = {
    login: function(req, res){
        console.log('login!');
        res.send('Login!');
    },
    register: function (req, res){
        console.log('register!');
        res.send('Register!');
    },
}

module.exports = userController