import axios from "axios";

import { FETCHSTUDENTS } from "./action_types";
import api_route from "../../app-config";

const getStudentDispatcher = payload => {
  return {
    type: FETCHSTUDENTS,
    payload
  };
};

export const getStudents = payload => {
  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };
  console.log("mounting in Student List------------");
  return dispatch => {
    try {
      console.log("In try bloc");
      axios
        .get(
          `${api_route.host}/student/profile/${payload.studentnameFilter}/${payload.majorFilter}/empty/empty?limit=${payload.limit}&page=${payload.page}`,
          config
        )
        .then(res => {
          console.log(res.data);
          dispatch(getStudentDispatcher(res.data));
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
};
