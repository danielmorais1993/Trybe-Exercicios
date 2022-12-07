import { getCurrentISSLocation } from "../../../ISSservices";

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

function requestStarted() {
  return { type: REQUEST_STARTED };
}

function requestSuccessful(issLocation) {
  return {
    type: REQUEST_SUCCESSFUL,
    latitude: parseFloat(issLocation.latitude),
    longitude: parseFloat(issLocation.longitude)
  };
}

function requestFailed(error) {
  return {
    type: REQUEST_FAILED,
    errorMessage: error,
  };
}

export   function fetchISS() {
  return async (dispatch) => {
    dispatch(requestStarted());
    try{
    const response = await getCurrentISSLocation();
    console.log(response)
    dispatch(requestSuccessful(response.iss_position))
    }catch(error){
      dispatch(requestFailed(error))
    }
    
  }
}



























 