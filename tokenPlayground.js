const jwt = require('jsonwebtoken');


const user = {
    id: '4050',
    name: 'Joao Almeida',
    email: 'joaoalmeida@gmail.com',
    password: '321321',
}



const secret = "9g8t4"

// passar payload e secret
const token = jwt.sign({user : user.id, email: user.email}, secret)

console.log(token);