import {
  GETCOMPANYPROFILE,
  EDITCOMPANYPROFILE,
  CREATEJOB,
  EDITPROFILEPIC,
  FETCHSTUDENTLIST,
  CHANGESTATUS,
  FETCHEVENTANDCOMPANY,
  CREATEEVENT
} from "./action_types";
import axios from "axios";
import api_route from "../../app-config";

const getCompanyProfileDispatcher = payload => {
  return {
    type: GETCOMPANYPROFILE,
    payload
  };
};

const editCompanyProfileDispatcher = payload => {
  return {
    type: EDITCOMPANYPROFILE,
    payload
  };
};
const editProfilePicDispatcher = payload => {
  return {
    type: EDITPROFILEPIC,
    payload
  };
};
const createJobsDispatcher = payload => {
  return {
    type: CREATEJOB,
    payload
  };
};

const getStudentListDispatcher = payload => {
  return {
    type: FETCHSTUDENTLIST,
    payload
  };
};
const fetchEventDisptacher = payload => {
  return {
    type: FETCHEVENTANDCOMPANY,
    payload
  };
};

const createEventDispatcher = payload => {
  return {
    type: CREATEEVENT,
    payload
  };
};

export const getCompanyProfile = payload => {
  return dispatch => {
    let config = {
      headers: {
        Authorization: `${window.localStorage.getItem("company")}`
      }
    };
    console.log("mounting in education------------");

    try {
      var propicture = "";
      var companyobj = "";
      var companyname = "";
      console.log("In try bloc");
      axios
        .get(`${api_route.host}/company/`, config)
        .then(res => {
          // this.setState({ companyobj: res.data.company });
          companyobj = res.data.company;
          companyname = res.data.company.company_basic_details.companyName;
          console.log(res.data.company);
          if (res.data.company.company_basic_details.profilePic) {
            var src = `${api_route.host}//${res.data.company
              .company_basic_details.profilePic}`;
            //   this.setState({ propicture: src });
            propicture = src;
          }
          try {
            var jobarr = [];
            var perjobarr = [];
            var jobobj = "";
            var total = "";
            console.log("In try bloc");
            axios
              .get(
                `${api_route.host}/jobs/${companyname}/${payload.locationFilter}/${payload.categoryFilter}/${payload.sortFilter}?limit=${payload.limit}&page=${payload.page}`,
                config
              )
              .then(res => {
                console.log(res.data);
                //   this.setState({ jobarr: res.data.result });
                //   this.setState({ perjobarr: res.data.result });
                //   this.setState({ jobobj: res.data.result[0] });
                jobarr = res.data.result;
                perjobarr = res.data.result;
                jobobj = res.data.result[0];
                total = res.data.total;
                // console.log(this.state.companyobj);
                const result = perjobarr.filter(
                  i =>
                    i.company_basic_detail_id ==
                    companyobj.company_basic_details.company_basic_detail_id
                );
                console.log(result);
                var sendObj = {
                  propicture,
                  companyobj,
                  jobarr,
                  perjobarr,
                  total
                };
                dispatch(getCompanyProfileDispatcher(sendObj));
                //   this.setState({ perjobarr: result });
                //   this.setState({ jobarr: result });
              })
              .catch(err => {
                console.log(err);
              });
          } catch (err) {
            console.log(err);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
    console.log("getting education in mount");
    //  this.props.getEducation();
  };
};

export const editCompanyProfile = payload => {
  return dispatch => {
    let config = {
      headers: {
        Authorization: `${window.localStorage.getItem("company")}`
      }
    };
    let data = payload;
    console.log(payload);
    axios
      .put(`${api_route.host}/company/`, data, config)
      .then(res => {
        console.log("response coming");

        console.log(res.data);
        //  this.setState({ companyobj: res.data.company });
        dispatch(editCompanyProfileDispatcher(res.data.company));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const editProfilePic = payload => {
  return dispatch => {
    let picdata = new FormData();
    picdata.append("myimage", payload);
    let config = {
      headers: {
        Authorization: `${window.localStorage.getItem("company")}`
      }
    };

    console.log("mounting in picture------------");
    try {
      console.log("In try block");
      axios
        .post(`${api_route.host}/company/picture`, picdata, config)
        .then(res => {
          console.log(res.data);
          var src = `${api_route.host}//${res.data.name}`;
          //   this.setState({ propicture: src });
          dispatch(editProfilePicDispatcher(src));
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const createJobs = payload => {
  return dispatch => {
    let config = {
      headers: {
        Authorization: `${window.localStorage.getItem("company")}`
      }
    };
    let data = payload;
    axios
      .post(`${api_route.host}/jobs/`, data, config)
      .then(res => {
        // this.setState({ addSuccessMsg: "Job added Successfully" });
        // let newarr = this.state.perjobarr;
        // newarr.push(res.data);
        console.log(res.data);
        dispatch(createJobsDispatcher(res.data));
        // this.setState({ jobarr: newarr });
        // this.setState({ perjobarr: newarr });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getStudentList = payload => {
  return dispatch => {
    let config = {
      headers: {
        Authorization: `${window.localStorage.getItem("company")}`
      }
    };
    console.log("mounting in Student List------------");
    //this.setState({educationarr:this.props.educationData})
    try {
      console.log("In try bloc");
      axios
        .get(
          `${api_route.host}/jobs/${localStorage.getItem("jobid")}/students`,
          config
        )
        .then(res => {
          // this.setState({ studentarr: res.data.msgDesc });
          // this.setState({ perStudentArr: res.data.msgDesc });
          dispatch(getStudentListDispatcher(res.data));
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };
};
// export const changeStatus =payload=>{
//  console.log(payload)
//   return dispatch=>{
//     let config = {
//       headers: {
//         Authorization: `${window.localStorage.getItem("company")}`
//       }
//     };
//     let data = payload.data;
//     console.log("changing  Student status------------");
//     //this.setState({educationarr:this.props.educationData})
//     try {

//       axios
//         .post(`${api_route.host}/jobs/${payload.jobid}/${payload.studentid}`, data, config)
//         .then(res => {
//          dispatch(changeStatusDispatcher(res.data))
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }

export const fetchEvents = payload => {
  try {
    console.log(payload);
    var companyobj;
    var perjobarr = [];
    return dispatch => {
      let config = {
        headers: {
          Authorization: `${window.localStorage.getItem("company")}`
        }
      };
      console.log("In try bloc");
      axios
        .get(`${api_route.host}/company`, config)
        .then(res => {
          companyobj = res.data.company;
          //this.setState({ companyobj: res.data.company });
          console.log(res.data);
          try {
            console.log("In try bloc");
            axios
              .get(
                `${api_route.host}/events/${payload.locationAndTitleFilter}?limit=${payload.limit}&page=${payload.page}`,
                config
              )
              .then(res => {
                perjobarr = res.data.result;
                var total = res.data.total;
                const result = perjobarr.filter(
                  i =>
                    i.company_basic_detail_id ==
                    companyobj.company_basic_details.company_basic_detail_id
                );
                console.log(result);

                var sendobj = {
                  perjobarr: result,
                  companyobj,
                  total: total
                };
                dispatch(fetchEventDisptacher(sendobj));
              })
              .catch(err => {
                console.log(err);
              });
          } catch (err) {
            console.log(err);
          }
        })
        .catch(err => {
          console.log(err);
        });
    };
  } catch (err) {
    console.log(err);
  }
};
export const createEvent = payload => {
  console.log(payload);
  return dispatch => {
    let config = {
      headers: {
        Authorization: `${window.localStorage.getItem("company")}`
      }
    };
    let data = payload.data;
    axios
      .post(`${api_route.host}/events/`, data, config)
      .then(res => {
        //this.setState({ addSuccessMsg: "event added Successfully" });
        // let newarr = this.state.perjobarr;
        // newarr.push(res.data);
        // console.log(newarr);
        dispatch(createEventDispatcher(res.data));
        // this.setState({ jobarr: newarr });
        // this.setState({ perjobarr: newarr });
        // const result = this.state.perjobarr.filter(
        //   i =>
        //     i.company_basic_detail_id ==
        //    payload.companyobj.company_basic_details.company_basic_detail_id
        // );
      })
      .catch(err => {
        console.log(err);
      });
  };
};
