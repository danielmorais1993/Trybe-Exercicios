import './App.css';
import store from './Home';
import { connect } from 'react-redux';
import React from 'react';



// store.subscribe(() => {
//   const {count} = store.getState();
//   const counter = document.getElementById('count');
//   counter.innerHTML = count


//   console.log('Estado atualizado !');
// });

class App extends React.Component {
   onHandleClick = ({target})=>{ 
    const {value}= target;
    if(value==='Incrementar'){
    const action = {
      type: 'INCREMENT_COUNTER' 
    };
    store.dispatch(action); 
  }else{
  const action = {
    type: 'DECREMENT_COUNTER' 
  }
  store.dispatch(action); 
  }
  }

  render(){
    const { countState } = this.props;
  return (
    <div className="App">
      <h1>Contador:</h1>
      <p id='count'>{countState}</p>
      <button
      type='button'
      value='Incrementar'
      onClick={(e)=>this.onHandleClick(e)}>Incrementar</button>
      <button
      value='Decrementar'
      type='button'
      onClick={(e)=>this.onHandleClick(e)}>Decrementar</button>

    </div>
  );
  }
}
const mapStateToProps = (state) => ({
  countState: state.count,
});

export default connect(mapStateToProps)(App);
