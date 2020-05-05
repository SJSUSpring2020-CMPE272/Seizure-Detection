const jwt = require('jsonwebtoken')
const key = require('./key');

function generateToken(username) {
    return jwt.sign({ payload: username }, key.secret)
}
function decryptToken(token) {
   
     console.log('inside decrypt token'+token)
      let email;
     try {
    token=token.replace(/^"|"$/g, '');
   console.log('inside decrypt token'+token)
   
   
  
        email = jwt.verify(token, key.secret).payload;
       
    }
    catch (err) {
        return {
            email: null,
            error: err.message
          }
      
    }
    return {
        email,
        error: null
      }
    
}

module.exports = {
    generateToken,decryptToken
}