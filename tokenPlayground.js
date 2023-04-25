const jwt = require('jsonwebtoken');


const user = {
    id: '4050',
    name: 'Joao Almeida',
    email: 'joaoalmeida@gmail.com',
    password: '321321',
}



const secret = "9g8t4"

// passar payload e secret
//const token = jwt.sign({user : user.id, email: user.email}, secret, {expiresIn: 50})
//console.log(token);

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNDA1MCIsImVtYWlsIjoiam9hb2FsbWVpZGFAZ21haWwuY29tIiwiaWF0IjoxNjgyNDM0NTc2LCJleHAiOjE2ODI0MzQ2MjZ9.3Vgi9MOz5Abyle1kF02E3za60zC_n381yVFPxaFpjgE"

const validData = jwt.verify(token, secret)
console.log(validData);