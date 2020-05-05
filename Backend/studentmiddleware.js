function validateUsername(req,res,next){
   
   
       
      if(req.body.student.name==''||req.body.student.name==undefined){
          return res.status(400).json({
              errors:{
                  body: ["username is not provided"]
              }
            })
          
          
      }
    
      
      next();
  
  }
  
  function validatePassword(req,res,next){
    
    if(undefined==req.body.student.password||req.body.student.password.length< 6){
          return res.status(400).json({
              errors:{
                  body: ["password is too short or undefined"]
              }
            })
          
          
      }
  
      next();
  
  }
  
  function validateEmail(req,res,next){
     
      if(req.body.student.email==''||req.body.student.email==undefined){
         
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