import {
  GETREGISTEREDJOBS
} from "../actions/action_types";

const initState = {};

const applicationReducer = (state = initState, action) => {
  switch (action.type) {
   
    case GETREGISTEREDJOBS:{
        return{ 
            ...state,
            result:action.payload.result,
            total:action.payload.total
        }

    }
   
    default:
      // need this for default case
      return state;
  }
};

export default applicationReducer;
