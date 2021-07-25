import * as types from "../constants/ActionTypes";

export function setMeta(data) {
  return { type: types.SET_META, data };
}
