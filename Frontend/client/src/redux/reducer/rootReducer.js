import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import profileReducer from "./profileReducer";
import studentListReducer from "./studentListReducer";
import jobReducer from "./jobAndEventReducer";
import applicationReducer from'./applicationReduer';
import companyReducer from'./companyReducer';
import messageReducer from "./messageReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  profileReducer: profileReducer,
  studentListReducer: studentListReducer,
  jobReducer:jobReducer,
  applicationReducer:applicationReducer,
  companyReducer:companyReducer,
  messageReducer:messageReducer
});

export default rootReducer;
