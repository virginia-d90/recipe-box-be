require('dotenv').config();
const jwt = require('jsonwebtoken');


//create token
function createToken(payload){
    const secret = process.env.SECRET_JWT;
    
    const options ={
        expiresIn: 60 * 60 * 8
    }
    delete payload.password
    return jwt.sign(payload, secret, options)
}
//validate username
//validate password
//validate email

module.exports = {
    createToken,
}