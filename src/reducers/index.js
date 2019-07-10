import { combineReducers } from "redux";
import instruReducer from "./instruReducer";

export default combineReducers({
  sound: instruReducer,
  fx: instruReducer,
});
