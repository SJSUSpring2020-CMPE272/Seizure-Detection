import axios from "axios";

import {
  GETPROFILE,
  UPDATENAME,
  UPDATEPROFILEPIC,
  UPDATECAREEROBJECTIVE,
  UPDATEEDUCATION,
  ADDEDUCATAION,
  DELETEEDUCATION,
  UPDATEEXPERIENCE,
  ADDEXPERIENCE,
  DELETEEXPERIENCE,
  ADDSKILL,
  REMOVESKILL,
  ADDBASIC
} from "./action_types";
import api_route from "../../app-config";
const getProfileDispatcher = payload => {
  return {
    type: GETPROFILE,
    payload
  };
};

const updateNameDispatcher = payload => {
  return {
    type: UPDATENAME,
    payload
  };
};
const updateProfilePicDispatcher = payload => {
  return {
    type: UPDATEPROFILEPIC,
    payload
  };
};

const updateCareerObjectiveDispatcher = payload => {
  return {
    type: UPDATECAREEROBJECTIVE,
    payload
  };
};

const updateEducationDispatcher = payload => {
  return {
    type: UPDATEEDUCATION,
    payload
  };
};

const addEducationDispatcher = payload => {
  return {
    type: ADDEDUCATAION,
    payload
  };
};
const deleteEducationDispatcher = payload => {
  return {
    type: DELETEEDUCATION,
    payload
  };
};

const updateExperienceDispatcher = payload => {
  return {
    type: UPDATEEXPERIENCE,
    payload
  };
};

const addExperienceDispatcher = payload => {
  return {
    type: ADDEXPERIENCE,
    payload
  };
};
const deleteExperienceDispatcher = payload => {
  return {
    type: DELETEEXPERIENCE,
    payload
  };
};
const addSkillDispatcher = payload => {
  return {
    type: ADDSKILL,
    payload
  };
};
const removeSkillDispatcher = payload => {
  return {
    type: REMOVESKILL,
    payload
  };
};

const addBasicDispatcher = payload => {
  return {
    type: ADDBASIC,
    payload
  };
};

export const getProfile = () => {
  console.log("localstorage is this " + window.localStorage.getItem("student"));
  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };

  let url = `http://localhost:3001/donor/`;
  return dispatch => {
    axios
      .get(url, config)
      .then(res => {
        if (res.status === 201) {
          console.log(res.data);
          var profile = res.data;
          if (res.data.profile_picture) {
            var src = `${api_route.host}//${res.data.profile_picture}`;

            profile = { ...profile, profile_picture: src };
            console.log(profile);
          }
          dispatch(getProfileDispatcher(profile));
        }
      })
      .catch(errors => {
        console.log(errors);
      });
  };
};

export const getProfileSelected = () => {
  console.log(
    "localstorage is this " + window.localStorage.getItem("visitedstudent")
  );
  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };

  let url = `http://localhost:3001/donor/visit/${window.localStorage.getItem(
    "visitedstudent"
  )}`;
  return dispatch => {
    axios
      .get(url, config)
      .then(res => {
        if (res.status === 201) {
          console.log(res.data);
          var profile = res.data;
          if (res.data.profilePic) {
            var src = `${api_route.host}//${res.data.profilePic}`;

            profile = { ...profile, profilePic: src };
            console.log(src);
          }
          dispatch(getProfileDispatcher(profile));
        }
      })
      .catch(errors => {
        console.log(errors);
      });
  };
};

export const updateName = sname => {
  //  let token=window.localStorage.getItem("student")
  console.log("localstorage is this " + window.localStorage.getItem("student"));
  console.log("updated name is" + sname);
  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };
  let data = {
    student: {
      name: sname
    }
  };
  let url = `http://localhost:3001/donor/name`;
  return dispatch => {
    axios
      .put(url, data, config)
      .then(res => {
        if (res.status === 201) {
          dispatch(updateNameDispatcher(sname));
        }
      })
      .catch(errors => {
        console.log(errors);
      });
  };
};
export const updateProfilePic = payload => {
  console.log("pro pic change");
  // console.log(this.state.picture)
  let picdata = new FormData();
  picdata.append("myimage", payload);
  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };

  console.log("mounting in picture------------");
  try {
    console.log("In try block");
    return dispatch => {
      axios
        .post(`${api_route.host}/donor/picture`, picdata, config)
        .then(res => {
          console.log(res.data);
          var src = `${api_route.host}//${res.data.name}`;
          // this.setState({ propicture: src });
          dispatch(updateProfilePicDispatcher(src));
        })
        .catch(err => {
          console.log(err);
        });
    };
  } catch (err) {
    console.log(err);
  }
};

export const updateCareerObjective = payload => {
  console.log("in action updating career");
  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };
  let data = {
    student: {
      career_objective: payload
    }
  };
  return dispatch => {
    axios
      .post(`${api_route.host}/donor/journey`, data, config)
      .then(res => {
        // this.setState({journeyvalue:this.state.value})
        dispatch(updateCareerObjectiveDispatcher(payload));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const updateEducation = payload => {
  //console.log(this.state.schoolname+" "+payload)

  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };
  var data = payload;
  return dispatch => {
    axios
      .put(`${api_route.host}/student/education`, data, config)
      .then(res => {
        console.log("response coming");
        // let newarr = this.state.educationarr;
        // newarr.push(res.data);
        // console.log(newarr);
        // this.setState({ educationarr: res.data });
        console.log(res.data);
        dispatch(updateEducationDispatcher(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addEducation = payload => {
  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };
  var data = payload;
  return dispatch => {
    axios
      .post(`${api_route.host}/student/education`, data, config)
      .then(res => {
        dispatch(addEducationDispatcher(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const deleteEducation = payload => {
  {
    console.log(payload + " in deleting");

    let config = {
      headers: {
        Authorization: `${window.localStorage.getItem("student")}`
      }
    };
    let data = {
      education: {
        educationId: payload
      }
    };
    return dispatch => {
      axios
        .delete(`${api_route.host}/student/education`, {
          data: { data: data },
          headers: {
            Authorization: `${window.localStorage.getItem("student")}`
          }
        })
        .then(res => {
          dispatch(deleteEducationDispatcher(res.data));
        })
        .catch(err => {
          console.log(err);
        });
    };
  }
};

export const updateExperience = payload => {
  console.log(" " + payload);

  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };
  var data = payload;
  return dispatch => {
    axios
      .put(`${api_route.host}/student/experience`, data, config)
      .then(res => {
        console.log("response coming", res.data);
        dispatch(updateExperienceDispatcher(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addExperience = payload => {
  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };
  let data = payload;
  return dispatch => {
    axios
      .post(`${api_route.host}/student/experience`, data, config)
      .then(res => {
        dispatch(addExperienceDispatcher(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const deleteExperience = payload => {
  let data = payload;
  return dispatch => {
    axios
      .delete(`${api_route.host}/student/experience`, {
        data: { data: data },
        headers: { Authorization: `${window.localStorage.getItem("student")}` }
      })
      .then(res => {
        console.log("response coming", res.body);
        dispatch(deleteExperienceDispatcher(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addSkill = payload => {
  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };
  let data = {
    student: {
      skill_name: payload
    }
  };
  return dispatch => {
    axios
      .post(`${api_route.host}/student/skills`, data, config)
      .then(res => {
        dispatch(addSkillDispatcher(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const removeSkill = payload => {
  console.log(payload);
  let data = {
    skills: {
      skill_id: payload
    }
  };
  return dispatch => {
    axios
      .delete(`${api_route.host}/student/skills`, {
        data: { data: data },
        headers: { Authorization: `${window.localStorage.getItem("student")}` }
      })
      .then(res => {
        dispatch(removeSkillDispatcher(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const addBasic = payload => {
  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };
  let data = payload;
  console.log("going to enter student data");
  return dispatch => {
    axios
      .post(`${api_route.host}/donor/basicdetails`, data, config)
      .then(res => {
        console.log(res.data);
        dispatch(addBasicDispatcher(res.data.result));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
