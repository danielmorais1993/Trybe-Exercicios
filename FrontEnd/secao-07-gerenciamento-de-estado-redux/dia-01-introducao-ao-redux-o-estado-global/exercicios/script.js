 import { legacy_createStore as createStore, combineReducers } from "redux";
 import { composeWithDevTools } from "@redux-devtools/extension"

// const INITIAL_STATE = {
//   colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
//   index: 0,
// };
// function criarCor() {
//   const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
//   let cor = '#';
//   const aleatorio = () => Math.floor(Math.random() * oneChar.length);
//   for (let i = 0; i < 6; i += 1) {
//       cor += oneChar[aleatorio()];
//   }
//   return cor;
// }


// const reducer = (state =  INITIAL_STATE, action) => {
//   const changeIndex = (state.index + 1) % state.colors.length
//   const randomColor = criarCor();
//   switch(action.type){
//     case('NEXT_COLOR'): 
//     return {...state,index: changeIndex}
//     case('PREVIOUS_COLOR'):
//     return {...state,index: changeIndex}
//     case("RANDOM_COLOR"):
//     return {...state,colors: [...state.colors,criarCor()] , index: state.colors.length }
//     default: state
//   }
// }
// const store = createStore(reducer , composeWithDevTools())


// const getPrevious = document.getElementById('previous')
// const getNext = document.getElementById('next')
// const randomButton = document.getElementById('random')

// getPrevious.addEventListener('click',() =>{
//   const action = { type: "PREVIOUS_COLOR" }
//   store.dispatch(action);
// })
// getNext.addEventListener('click',() =>{
//   const action = { type: "NEXT_COLOR" }
//   store.dispatch(action);
// })
// randomButton.addEventListener('click',() =>{
//   const action = { type: "RANDOM_COLOR" }
//   store.dispatch(action);
// })
// store.subscribe(() => {
//   const globalState = store.getState();

//   const colorElement = document.querySelector('#value');
//   const styleColor = document.querySelector('#container');
//   colorElement.innerHTML = globalState.colors[globalState.index]
//   styleColor.style.backgroundColor =globalState.colors[globalState.index]

//   console.log('Estado atualizado !');
// });

const THEME_INITIAL_STATE = {
  theme: 'dark',
};

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    case('DISPLAY_MODE'):
    return {...state, theme: state.theme==='dark' ? 'light' : 'dark' }
    default:
      return state;
  }
};

const STATUS_INITIAL_STATE = {
  status: 'offline',
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {
    case('STATUS_MODE'):
    return {...state, status: state.status==='online' ? 'offline' : 'online' }
    default:
      return state;
  }
};
const rootReducer = combineReducers({themeReducer,statusReducer})
const store = createStore(rootReducer,composeWithDevTools())



const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');
const bodySelect = document.querySelector('body')
const getMode = document.getElementById('status')

themeButton.addEventListener('click', () => {
  const action = { type: "DISPLAY_MODE" }
    store.dispatch(action);
});

statusButton.addEventListener('click', () => {
  const action = { type: "STATUS_MODE" }
    store.dispatch(action);
});
store.subscribe(()=>{
    const globalState = store.getState();
    const {themeReducer:{theme},statusReducer:{status}} = globalState
    console.log(theme)
    console.log(status)
if(theme==='light'){
  themeButton.innerHTML = 'Dark Mode';
  bodySelect.style.backgroundColor = '#e4e5f1'
  bodySelect.style.color='#000000'
}else{
  themeButton.innerHTML = 'Light Mode';
  bodySelect.style.backgroundColor = '#121212' 
  bodySelect.style.color='white'

}
if(status==='online'){
  statusButton.innerHTML = 'Ficar offline';
  getMode.innerHTML='online'

}else{
  statusButton.innerHTML = 'Ficar Online';
  getMode.innerHTML='offline'

}
  


  console.log('Estado atualizado !');

})