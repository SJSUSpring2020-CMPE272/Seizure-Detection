function validateUsername(req,res,next){
   
   
       
    if(req.body.company.company_name==''||req.body.company.company_name==undefined){
        return res.status(400).json({
            errors:{
                body: ["username is not provided"]
            }
          })
        
        
    }
  
    
    next();

}

function validatePassword(req,res,next){
  
   
    if(undefined==req.body.company.password||req.body.company.password.length< 6){
        return res.status(400).json({
            errors:{
                body: ["password is too short or undefined"]
            }
          })
        
        
    }

    next();

}

function validateEmail(req,res,next){
   
    if(req.body.company.email==''||req.body.company.email==undefined){
       
      return res.status(400).json({
            errors:{
                body: ["email is not provided"]
            }
          })
        
        
    }
    

    next();

}
module.exports={
    validateUsername,validateEmail,validatePassword
}