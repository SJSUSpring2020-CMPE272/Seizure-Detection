import authReducer from "./authReducer";
import profileReducer from "./profileReducer";


import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  profileReducer: profileReducer
  
});

export default rootReducer;
