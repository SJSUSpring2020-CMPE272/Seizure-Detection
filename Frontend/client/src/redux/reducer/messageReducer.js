import {
    GETMESSAGES,SENDMESSAGE
  } from "../actions/action_types";
  
  const initState = {};
  
  const messageReducer = (state = initState, action) => {
    switch (action.type) {
     
      case GETMESSAGES:{
          console.log(action.payload)
          return{ 
              ...state,
              messageArr:action.payload
          }
  
      }
      
      
      case SENDMESSAGE:{
        return{ 
            ...state,
            newmessage:action.payload.MessageArray.slice(-1)[0]
        }

    }
    
      

     
      default:
        // need this for default case
        return state;
    }
  };
  
  export default messageReducer;
  