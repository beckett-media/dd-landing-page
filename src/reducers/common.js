import * as ActionTypes from "../constants/ActionTypes";

const initialState = {};

const actionsMap = {
  [ActionTypes.SET_META](state, action) {
    return { ...state, ...action.data };
  },
};

export default function common(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
