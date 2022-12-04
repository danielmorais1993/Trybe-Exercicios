import { combineReducers } from 'redux';

const INITIAL_STATE = {name:'',
		gender: '',
		culture: '',
		born: '',
    isFetching:false,
    titles:'',
  };

const exampleReducer = (state = INITIAL_STATE, action) => {
  console.log(action.payload)
 switch(action.type) {
  case 'REQUEST_INFO':
    return {...state,isFetching:true}
  
  case 'GET_INFO':
    return {...state,
      isFetching: false,
      name:action.payload.name,
      culture:action.payload.culture,
      born: action.payload.born,
      gender:action.payload.gender,
      titles:action.payload.titles[0],
    }
  
   default:
    return state;
 }
}

const rootReducer = combineReducers({ exampleReducer })

export default rootReducer;