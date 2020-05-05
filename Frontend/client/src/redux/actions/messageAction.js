import axios from "axios";

import {
GETMESSAGES,SENDMESSAGE
} from "./action_types";
import api_route from "../../app-config";

const getMessagesDispatcher = payload => {
    return {
      type: 
      GETMESSAGES,
      payload
    };
  };
  const sendMessagesDispatcher = payload => {
    return {
      type: 
      SENDMESSAGE,
      payload
    };
  };


  export const getMessages =payload=>{
    
    let config = {
        headers: {
          Authorization: `${window.localStorage.getItem("student")}`
        }
      };
      console.log("getting all messages------------");
      //this.setState({educationarr:this.props.educationData})
      try {
        console.log("In try bloc");
        return dispatch=>{
        axios
          .get(`${api_route.host}/student/message/${window.localStorage.getItem("loginId")}`, config)
          .then(res => {
            // this.setState({ jobarr: res.data.result });
            dispatch(getMessagesDispatcher(res.data))
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
      export const sendMessage =payload=>{
    
        let config = {
            headers: {
              Authorization: `${window.localStorage.getItem("student")}`
            }
          };
          console.log("sending messages------------");
          //this.setState({educationarr:this.props.educationData})
          try {
            console.log("In try bloc");
            return dispatch=>{

                console.log(payload)

                let data={
                    message:{
                     body:payload.body
                    }
                 
                }
            axios
              .post(`${api_route.host}/student/message/${window.localStorage.getItem("loginId")}/${payload.receiverId}/${payload.senderModel}/${payload.receiverModel}`, data,config)
              .then(res => {
                // this.setState({ jobarr: res.data.result });
                dispatch(sendMessagesDispatcher(res.data))
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