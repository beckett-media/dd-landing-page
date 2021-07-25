import * as types from "../constants/ActionTypes";

export function addJob(job) {
  return { type: types.ADD_JOB, data: job };
}

export function resetJob(job) {
  return { type: types.RESET_JOB };
}

export function updateJob(data) {
  return { type: types.UPDATE_JOB, data };
}
