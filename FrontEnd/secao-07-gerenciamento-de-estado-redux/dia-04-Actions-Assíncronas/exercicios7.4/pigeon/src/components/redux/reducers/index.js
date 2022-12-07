import { combineReducers } from "redux";
import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from "../actions";

const INITIAL_STATE= {
  longitude:0,
  latitude:0,
  isFetching:false,
  errorMessage:'',
}

const ISSreducer = (state = INITIAL_STATE,action) =>{
  switch(action.type){
    case REQUEST_STARTED: 
    return {...state,isFetching: true}
    case REQUEST_SUCCESSFUL:
    return {...state,
    longitude:action.longitude,
  latitude:action.latitude,
isFetching:false}
case REQUEST_FAILED:
  return {...state,errorMessage:action.errorMessage}
    default: return state
  }

}
export const rootReducer = combineReducers({ISSreducer})
