import * as types from "../constants/ActionTypes";

export function login(user) {
  return { type: types.SET_USER, data: user };
}

export function updateUser(user) {
  return { type: types.UPDATE_USER, data: user };
}

export function logout() {
  return { type: types.RESET_REDUX_STORE };
}
