import * as ActionTypes from "../constants/ActionTypes";

const initialState = {};

const actionsMap = {
  [ActionTypes.SET_USER](state, action) {
    return { ...action.data };
  },
  [ActionTypes.UPDATE_USER](state, action) {
    return { ...state, ...action.data };
  },
};

export default function auth(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
