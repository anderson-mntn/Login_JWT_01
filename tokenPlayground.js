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

function createToken(){
    const token = jwt.sign({user : user.id, email: user.email}, secret, {expiresIn: 50})
    console.log(token);
}


function verifyToken(token){
    try {
        const validData = jwt.verify(token, secret)
        console.log(validData);
    } catch (error) {
        console.log(error);        
    }
}

//createToken();

//Deve ser passado uma string - jwt.verify
verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNDA1MCIsImVtYWlsIjoiam9hb2FsbWVpZGFAZ21haWwuY29tIiwiaWF0IjoxNjgyNDM1MTA5LCJleHAiOjE2ODI0MzUxNTl9.H3ikHNgJDesYGzgUiTMy9NplXxyXFYghwiODG08tuxk')