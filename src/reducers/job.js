import * as ActionTypes from "../constants/ActionTypes";

const initialState = {};

const actionsMap = {
  [ActionTypes.ADD_JOB](state, action) {
    return { ...action.data };
  },
  [ActionTypes.UPDATE_JOB](state, action) {
    return { ...state, ...action.data };
  },
  [ActionTypes.RESET_JOB](state, action) {
    return {};
  },
};

export default function job(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
