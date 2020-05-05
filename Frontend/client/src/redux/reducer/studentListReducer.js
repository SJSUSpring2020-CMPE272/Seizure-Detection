import { FETCHSTUDENTS } from "../actions/action_types";

const initState = {
  editEducation: false,
  educationarr: "",
  studentname: ""
};

const studentListReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCHSTUDENTS: {
      console.log(action.payload);
      return {
        ...state,
        studentlist: action.payload
      };
    }

    default:
      // need this for default case
      return state;
  }
};
export default studentListReducer;
