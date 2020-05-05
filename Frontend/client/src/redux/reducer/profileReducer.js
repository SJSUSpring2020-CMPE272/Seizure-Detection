import {
  GETPROFILE,
  UPDATENAME,
  UPDATEPROFILEPIC,
  UPDATECAREEROBJECTIVE,
  UPDATEEDUCATION,
  ADDEDUCATAION,
  DELETEEDUCATION,
  UPDATEEXPERIENCE,
  ADDEXPERIENCE,DELETEEXPERIENCE,
  ADDSKILL,REMOVESKILL, ADDBASIC
} from "../actions/action_types";

const initState = {
  editEducation: false,
  educationarr: "",
  studentname: ""
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case GETPROFILE: {
      console.log("in reducer")
      console.log(action.payload);
      return {
        ...state,
        profile: action.payload
      };
    }
    case UPDATENAME: {
      console.log(action.payload + "Updating name in reducer");
      console.log(state);
      return {
        ...state,
        profile: {
          ...state.profile,
          name: action.payload
        }
      };
    }
    case UPDATEPROFILEPIC: {
      console.log(action.payload + "Updating picture in reducer");
      return {
        ...state,
        profile: {
          ...state.profile,
          profile_picture: action.payload
        }
      };
    }
    case UPDATECAREEROBJECTIVE: {
      console.log(action.payload + "Updating career in reducer");
      return {
        ...state,
        profile: {
          ...state.profile,
          career_objective: action.payload
        }
      };
    }
    case UPDATEEDUCATION: {
      console.log(
        JSON.stringify(action.payload) + "Updating education in reducer"
      );
      return {
        ...state,
        profile: {
          ...state.profile,
          education: action.payload
        }
      };
    }

    case ADDEDUCATAION: {
      console.log(
        JSON.stringify(action.payload) + "adding education in reducer"
      );
      return {
        ...state,
        profile: {
          ...state.profile,
          education: action.payload
        }
      };
    }
    case DELETEEDUCATION: {
      console.log(
        JSON.stringify(action.payload) + "deleting education in reducer"
      );
      return {
        ...state,
        profile: {
          ...state.profile,
          education: action.payload
        }
      };
    }
    case ADDEDUCATAION: {
      console.log(
        JSON.stringify(action.payload) + "adding education in reducer"
      );
      return {
        ...state,
        profile: {
          ...state.profile,
          education: action.payload
        }
      };
    }
    case UPDATEEXPERIENCE: {
      console.log(
        JSON.stringify(action.payload) + "updating experience in reducer"
      );
      return {
        ...state,
        profile: {
          ...state.profile,
          experience: action.payload
        }
      };
    }
    case ADDEXPERIENCE: {
      console.log(
        JSON.stringify(action.payload) + "adding experience in reducer"
      );
      return {
        ...state,
        profile: {
          ...state.profile,
          experience: action.payload
        }
      };
    }
    case DELETEEXPERIENCE: {
      console.log(
        JSON.stringify(action.payload) + "deleting experience in reducer"
      );
      return {
        ...state,
        profile: {
          ...state.profile,
          experience: action.payload
        }
      };
    }
    case ADDSKILL: {
      console.log(
        JSON.stringify(action.payload) + "adding skill in reducer"
      );
      return {
        ...state,
        profile: {
          ...state.profile,
          skills: action.payload
        }
      };
    }
    case REMOVESKILL: {
      console.log(
        JSON.stringify(action.payload) + "deleting deleting in reducer"
      );
      return {
        ...state,
        profile: {
          ...state.profile,
          skills: action.payload
        }
      };
    }
    case ADDBASIC: {
      console.log(
        JSON.stringify(action.payload.student.student_basic_details) + "adding basic in reducer"
      );
      return {
        ...state,
        profile: {
          ...state.profile,
          emailId: action.payload.student.email,
          dob: action.payload.student.student_basic_details.dob,
          city: action.payload.student.student_basic_details.city,
          state: action.payload.student.student_basic_details.state,
          country: action.payload.student.student_basic_details.country,
          phone: action.payload.student.student_basic_details.phone
        }
      };
    }

    default:
      // need this for default case
      return state;
  }
};

export default profileReducer;
