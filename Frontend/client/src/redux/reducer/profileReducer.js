import {
  ADDADDRESS,GETADDRESS
} from "../actions/action_types";

const initState = {
  editEducation: false,
  educationarr: "",
  studentname: ""
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case ADDADDRESS: {
      console.log("in reducer")
      console.log(action.payload);
      return {
        ...state,
        address: action.payload.data
      };
    }
    case GETADDRESS: {
      console.log("in reducer")
      console.log(action.payload);
      return {
        ...state,
        address: action.payload.data
      };
    }
  

    default:
      // need this for default case
      return state;
  }
};

export default profileReducer;
