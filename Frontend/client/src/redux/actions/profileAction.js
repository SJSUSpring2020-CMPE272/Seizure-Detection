import axios from "axios";

import {
 ADDADDRESS,GETADDRESS
} from "./action_types";
import api_route from "../../app-config";
const getAddressDispatcher = payload => {
  return {
    type: GETADDRESS,
    payload
  };
};

const addAddressDispatcher = payload => {
  return {
    type: ADDADDRESS,
    payload
  };
};



export const getAddress = () => {
  console.log("localstorage is this " + window.localStorage.getItem("student"));
  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };

  let url = `${api_route.host}/user/address/${localStorage.getItem("loginId")}`;
  return dispatch => {
    axios
      .get(url, config)
      .then(res => {
        if (res.status === 201) {
          console.log(res.data);
          
          dispatch(getAddressDispatcher(res.data));
        }
      })
      .catch(errors => {
        console.log(errors);
      });
  };
};

export const addAddress = payload => {
  //  let token=window.localStorage.getItem("student")
  console.log("localstorage is this " + JSON.stringify(payload));
 
  let config = {
    headers: {
      Authorization: `${window.localStorage.getItem("student")}`
    }
  };
  let data = {
   payload
  };
  let url = `${api_route.host}/user/address/${localStorage.getItem("loginId")}`;
  return dispatch => {
    axios
      .post(url, data, config)
      .then(res => {
        if (res.status === 201) {
          console.log(res.data)
          dispatch(addAddressDispatcher(res.data));
        }
      })
      .catch(errors => {
        console.log(errors);
      });
  };
};

