const GET_INFO = 'GET_INFO';
const REQUEST_INFO = 'REQUEST_INFO';
const FAILED_REQUEST = 'FAILED_REQUEST';

function getInfo(json) {
  console.log(json)
  return { 
    type: GET_INFO, 
    payload: json[0],
  };
}

function requestInfo() {
  return { type: REQUEST_INFO };
}

function failedRequest(error) {
  console.log(error)
  return {  
    type: FAILED_REQUEST,   
    payload: error,
  };
}

export  function fetchAPI(char) {
  return  (dispatch) => {
    dispatch(requestInfo());
    return fetch(`https://anapioficeandfire.com/api/characters?name=${char}`)
      .then((response) => response.json())
      .then((json) => {console.log(json) 
        dispatch(getInfo(json))})
      .catch((error) => dispatch(failedRequest(error)));
  };
}