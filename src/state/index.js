import { combineReducers } from "redux"
import auth from "../reducers/auth"
import common from "../reducers/common"
import job from "../reducers/job"

export default combineReducers({ auth, common, job })
