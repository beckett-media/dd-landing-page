import { combineReducers } from "redux";
import job from "./job";
import auth from "./auth";
import common from "./common";

import * as ActionTypes from "../constants/ActionTypes";

let reducers = combineReducers({
  job,
  auth,
  common,
});

const rootReducer = (state, action) => {
  if (action.type === ActionTypes.RESET_REDUX_STORE) state = {};
  return reducers(state, action);
};

export default rootReducer;
