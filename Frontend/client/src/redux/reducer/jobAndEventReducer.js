import {
    FETCHJOBS,FETCHEVENTS,FETCHREGISTEREDEVENTS,REGISTEREVENT,ERROREVENTREGISTER
   } from "../actions/action_types";
   
   const initState = {
    applysuccess:false,
    showbutton:'block'
   };

   const jobReducer = (state = initState, action) => {
    switch (action.type) {
 
        case FETCHJOBS:{
            console.log(action.payload)
             // this.setState({ jobarr: res.data.result });
            // this.setState({ perjobarr: res.data.result });
            // this.setState({jobobj:res.data.result[0]})
            return{
                ...state,
                jobarr:action.payload.result,
                count:action.payload.total,
                pages:action.payload.pages
            }

        }

        case FETCHEVENTS:{
            console.log(action.payload)
       
            return{
                ...state,
                eventArr:action.payload.result,
                total:action.payload.total
            }
        }
        case FETCHREGISTEREDEVENTS:{
            console.log(action.payload)
       
            return{
                ...state,
                tempEventArr:action.payload
            }
        }
        case REGISTEREVENT:{
            console.log(action.payload)
            return{
                ...state,
                applysuccess:true,
                showbutton:'none'
              // this.setState({applysuccess:true})
      // this.setState({showbutton:'none'})
            }

        }
        case ERROREVENTREGISTER:{
            console.log(action.payload)
            return{
                ...state,
               error:action.payload
            }

        }

        default:
          
            return state;
    }
}

   export default jobReducer
   