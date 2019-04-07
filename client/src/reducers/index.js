import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import registrationReducer from "./registrationReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  registration: registrationReducer
});
