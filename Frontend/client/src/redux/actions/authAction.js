import {
  LOGINDONOR,
  UNAUTHENTICATEDSTUDENT,
  LOGINCOMPANY,
  UNAUTHENTICATEDCOMPANY,
  LOGOUTCOMPANY,
  LOGOUTSTUDENT,
  REGISTERCOMPANY,
  REGISTERDONOR
} from "./action_types";
import axios from "axios";
import api_route from "../../app-config";

const loginDonorDispatcher = payload => {
  return {
    type: LOGINDONOR,
    payload
  };
};
const unauthenticatedStudent = payload => {
  return {
    type: UNAUTHENTICATEDSTUDENT,
    payload
  };
};
const loginCompanyDispatcher = payload => {
  return {
    type: LOGINCOMPANY,
    payload
  };
};
const unauthenticatedCompany = payload => {
  return {
    type: UNAUTHENTICATEDCOMPANY,
    payload
  };
};
export const logoutStudent = () => {
  return {
    type: LOGOUTSTUDENT
  };
};
export const logoutCompany = () => {
  return {
    type: LOGOUTCOMPANY
  };
};
const registerCompanyDispatcher = payload => {
  return {
    type: REGISTERCOMPANY,
    payload
  };
};
const registerDonorDispatcher = payload => {
  return {
    type: REGISTERDONOR,
    payload
  };
};

export const registerDonor = payload => {
  return dispatch => {
    axios
      .post(`${api_route.host}/user/register`, payload)
      .then(res => {
        if (res.status === 201) {
          dispatch(registerDonorDispatcher(res.data));
        }
        console.log(res);
      })
      .catch(errors => {
        console.log(errors);
        if (errors.response) {
          console.log("in catch", errors.response.data);
          // this.setState({ authFlag:false,
          // errors:errors.response.data.errors.body
          // });
          dispatch(unauthenticatedStudent(errors.response.data.errors.body));
        } else {
          dispatch(unauthenticatedStudent("Server error"));
        }
      });
  };
};

export const registerCompany = payload => {
  return dispatch => {
    axios
      .post(`${api_route.host}/company/register`, payload)
      .then(res => {
        if (res.status === 201) {
          dispatch(registerCompanyDispatcher(res.data));
        }
        console.log(res);
      })
      .catch(errors => {
        if (errors.response.data) {
          console.log("in catch", errors.response.data);
          // this.setState({ authFlag:false,
          // errors:errors.response.data.errors.body
          // });
          dispatch(unauthenticatedCompany(errors.response.data.errors.body));
        } else {
          dispatch(unauthenticatedCompany("Server error"));
        }
      });
  };
};

export const loginDonor = payload => {
  return dispatch => {
    axios
      .post(`${api_route.host}/user/login`, payload)
      .then(res => {
        if (res.status === 201) {
          dispatch(loginDonorDispatcher(res.data));
        }
        console.log(res);
      })
      .catch(errors => {
        console.log(errors);
        if (errors.response) {
          console.log("in catch", errors.response.data);
          // this.setState({ authFlag:false,
          // errors:errors.response.data.errors.body
          // });
          dispatch(unauthenticatedStudent(errors.response.data.errors.body));
        } else {
          dispatch(unauthenticatedStudent("Server error"));
        }
      });
  };
};
export const loginCompany = payload => {
  return dispatch => {
    axios
      .post(`${api_route.host}/company/login`, payload)
      .then(res => {
        if (res.status === 201) {
          console.log("in company login action");
          dispatch(loginCompanyDispatcher(res.data));
        }
      })
      .catch(errors => {
        console.log(errors);
        if (errors.response) {
          console.log(errors);
          // this.setState({ authFlag:false,
          // errors:errors.response.data.errors.body
          // });
          dispatch(unauthenticatedCompany(errors.response.data.errors.body));
        } else {
          dispatch(unauthenticatedCompany("Server error"));
        }
      });
  };
};
