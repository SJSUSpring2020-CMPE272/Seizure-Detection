import axios from "axios";

import {
GETREGISTEREDJOBS
} from "./action_types";
import api_route from "../../app-config";

const getRegisteredJobsDispatcher = payload => {
    return {
      type: GETREGISTEREDJOBS,
      payload
    };
  };


  export const getAppliedJobs =payload=>{
    
    let config = {
        headers: {
          Authorization: `${window.localStorage.getItem("student")}`
        }
      };
      console.log("mounting in jobs------------");
      //this.setState({educationarr:this.props.educationData})
      try {
        console.log("In try bloc");
        return dispatch=>{
        axios
          .get(`${api_route.host}/jobs/applied/${payload.statusFilter}`, config)
          .then(res => {
            // this.setState({ jobarr: res.data.result });
            dispatch(getRegisteredJobsDispatcher(res.data))
            // this.setState({ perjobArr: res.data.result });
            // this.setState({jobobj:res.data.result[0]})
            console.log(res.data);
          })
          .catch(err => {
            console.log(err);
          });
        }
      } catch (err) {
        console.log(err);
      }
  
}