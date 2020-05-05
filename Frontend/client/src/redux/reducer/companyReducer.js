import {
  GETCOMPANYPROFILE,
  EDITCOMPANYPROFILE,
  CREATEJOB,
  EDITPROFILEPIC,
  FETCHSTUDENTLIST,
  CHANGESTATUS,
  FETCHEVENTANDCOMPANY,
  CREATEEVENT
} from "../actions/action_types";

const initState = {};

const companyReducer = (state = initState, action) => {
  switch (action.type) {
    case GETCOMPANYPROFILE: {
      console.log(action.payload);
      return {
        ...state,
        companyobj: action.payload
        
      };
    }
    case EDITCOMPANYPROFILE: {
      console.log(action.payload);
      return {
        ...state,
        companyobject: action.payload
      };
    }
    case EDITPROFILEPIC: {
      return {
        ...state,
        propicture: action.payload
      };
    }
    case CREATEJOB: {
      console.log(action.payload);
      return {
        ...state,
        jobobj: action.payload.result
      };
    }
    case FETCHSTUDENTLIST: {
        return{
            ...state,
            studentList:action.payload
           }
    }
    case CHANGESTATUS:{
      return{
         state

      }
    }
    case FETCHEVENTANDCOMPANY:{
     console.log(action.payload)
      return{
        ...state,
        eventobj:action.payload
      }
    }
    case CREATEEVENT:{
      console.log(action.payload)
      return{
        ...state,
        createEventObj:action.payload
        
      }
    }

    default:
      // need this for default case
      return state;
  }
};

export default companyReducer;
