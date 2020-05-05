import {
  LOGINDONOR,
  UNAUTHENTICATEDSTUDENT,
  LOGINCOMPANY,
  UNAUTHENTICATEDCOMPANY,
  LOGOUTSTUDENT,
  LOGOUTCOMPANY,
  REGISTERDONOR,
  REGISTERCOMPANY,
} from "../actions/action_types";

const initState = {
  authStudent: false,
  authCompany: false,
  error: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGINDONOR: {
      console.log(action.payload);
      localStorage.setItem(
        "student",
        JSON.stringify(action.payload.user.token)
      );
      localStorage.setItem("loginId", action.payload.user.resp._id);

      return {
        authStudent: true,
      };
    }
    case UNAUTHENTICATEDSTUDENT: {
      console.log(action.payload);
      return {
        authStudent: false,
        autherror: action.payload,
      };
    }
    case LOGINCOMPANY: {
      console.log(action.payload);
      localStorage.setItem(
        "company",
        JSON.stringify(action.payload.user.token)
      );
      localStorage.setItem("loginId", action.payload.user.res._id);

      return {
        authCompany: true,
      };
    }
    case UNAUTHENTICATEDCOMPANY: {
      console.log(action.payload);
      return {
        authCompany: false,
        autherror: action.payload,
      };
    }
    case LOGOUTSTUDENT: {
      console.log("logging out student");
      localStorage.removeItem("student");
      if (localStorage.getItem("visitedstudent")) {
        localStorage.removeItem("visitedstudent");
      }
      return {
        authStudent: false,
      };
    }
    case LOGOUTCOMPANY: {
      console.log("logging out company");
      localStorage.removeItem("company");
      if (localStorage.getItem("jobid")) {
        localStorage.removeItem("jobid");
      }
      return {
        authCompany: false,
      };
    }
    case REGISTERDONOR: {
      console.log("inside register student reducer", action.payload);
      localStorage.setItem(
        "student",
        JSON.stringify(action.payload.user.token)
      );
      return {
        authStudent: true,
      };
    }
    case REGISTERCOMPANY: {
      console.log("inside register Company reducer", action.payload);
      localStorage.setItem(
        "company",
        JSON.stringify(action.payload.company.token)
      );
      return {
        authCompany: true,
      };
    }

    default:
      // need this for default case
      return state;
  }
};

export default authReducer;
