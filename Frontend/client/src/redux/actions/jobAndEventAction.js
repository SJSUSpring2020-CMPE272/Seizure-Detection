import axios from "axios";

import {
  FETCHSTUDENTS,
  FETCHJOBS,
  FETCHEVENTS,
  FETCHREGISTEREDEVENTS,
  REGISTEREVENT,
  ERROREVENTREGISTER
} from "./action_types";
import api_route from "../../app-config";

const getJobsDispatcher = payload => {
  return {
    type: FETCHJOBS,
    payload
  };
};

const getEventsDispatcher = payload => {
  return {
    type: FETCHEVENTS,
    payload
  };
};
const fetchRegisteredEventsDispatcher = payload => {
  return {
    type: FETCHREGISTEREDEVENTS,
    payload
  };
};
const registerEventDispatcher = payload => {
  return {
    type: REGISTEREVENT,
    payload
  };
};
const errorOnEventRegister = payload => {
  return {
    type: ERROREVENTREGISTER,
    payload
  };
};

export const getJobs = payload => {
  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };
  console.log("mounting in jobs------------");
  try {
    console.log("In try bloc");
    return dispatch => {
      axios
        .get(
          `${api_route.host}/jobs/${payload.companyFilter}/${payload.locationFilter}/${payload.categoryFilter}/${payload.sortFilter}?limit=${payload.limit}&page=${payload.page}`,
          config
        )
        .then(res => {
          dispatch(getJobsDispatcher(res.data));
          console.log(res.data.result);
        })
        .catch(err => {
          console.log(err);
        });
    };
  } catch (err) {
    console.log(err);
  }
};
export const getEvents = payload => {
  console.log(payload);
  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };
  console.log("mounting in events------------");

  try {
    console.log("In try block");
    return dispatch => {
      axios
        .get(
          `${api_route.host}/events/${payload.locationAndTitleFilter}?limit=${payload.limit}&page=${payload.page}`,
          config
        )
        .then(res => {
          // this.setState({ eventArr: res.data.result });
          // this.setState({ perEventArr: res.data.result });
          // this.setState({eventobj:res.data.result[0]})
          console.log(res.data.result);
          dispatch(getEventsDispatcher(res.data));
        })
        .catch(err => {
          console.log(err);
        });
    };
  } catch (err) {
    console.log(err);
  }
};

export const fetchRegisteredEvents = payload => {
  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };
  try {
    return dispatch => {
      axios
        .get(`${api_route.host}/events/registered`, config)
        .then(res => {
          // this.setState({ eventArr: res.data.result });

          dispatch(fetchRegisteredEventsDispatcher(res.data.result));
          console.log(res.data.result);
        })
        .catch(err => {
          console.log(err);
        });
    };
  } catch (err) {
    console.log(err);
  }
};
export const registerEvent = payload => {
  console.log("in register action");

  console.log(payload);

  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };
  let data = payload;
  return dispatch => {
    axios
      .post(`${api_route.host}/events/register`, data, config)
      .then(res => {
        // this.setState({registeredEvent:res.data})
        // this.setState({applysuccess:true})
        // this.setState({showbutton:'none'})
        dispatch(registerEventDispatcher(res.data));
      })
      .catch(errors => {
        if (errors.response) {
          dispatch(errorOnEventRegister(errors.response));
          // if(errors.response.data.eligible)
          // {
          //     this.setState({noteligible:errors.response.data.eligible})
          // }
          // else{
          //  this.setState({applyerror:'UniqueError'})
          //   console.log("in catch",errors.response.data);
          // }
        }
      });
  };
};
