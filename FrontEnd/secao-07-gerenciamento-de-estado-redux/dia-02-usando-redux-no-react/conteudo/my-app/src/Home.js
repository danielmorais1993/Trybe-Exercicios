import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {count:0}

const reduce = (state=INITIAL_STATE,action) => {
  switch(action.type){
    case('INCREMENT_COUNTER'):
    return {...state,count:state.count+1}
    case('DECREMENT_COUNTER'):
    return {...state,count:state.count-1}
    default:return state
  }
};
const store = createStore(reduce,composeWithDevTools());


export default store;