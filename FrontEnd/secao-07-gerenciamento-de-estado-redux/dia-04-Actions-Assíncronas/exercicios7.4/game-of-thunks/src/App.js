import { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchAPI } from './redux/actions';




class App extends Component  {
state={
  char:'',
}
onHandleChange = ({target})=>{
const {name, value} = target
this.setState({
  [name]:value
})
}
onHandleSubmit=(event)=>{
  const { dispatch } = this.props;
  const { char } = this.state;
  event.preventDefault();
  dispatch(fetchAPI(char))

}

  render(){
    const {name,gender,culture,born,isFetching,titles} = this.props

  

    const { char } = this.state;
    
   
    
  return (
    <div>
      {
        
        isFetching ? <p>Loading...</p>:
    <div>
    <form
    onSubmit={this.onHandleSubmit}>
      <label htmlFor='char'>
        Name character:
    <input
    type='text'
    onChange={this.onHandleChange}
    name='char'
    id='char'
    value={ char }/>
    
      </label>
      <button
      type='submit'
      >
        Search
      </button>
    </form>

      
      <ul>
        <li>
          {name}
        </li>
        <li>
          {gender}
        </li>
        <li>
          {culture}
        </li>
        <li>
          {born}
        </li>
        <li>
          {titles}
        </li>

      </ul>
      </div>
        }
    
    </div>
    

  
  );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
  name:state.exampleReducer.name,
  gender: state.exampleReducer.gender,
  culture: state.exampleReducer.culture,
  born: state.exampleReducer.born,
  isFetching:state.exampleReducer.isFetching,
  titles:state.exampleReducer.titles,
}}
console.log(mapStateToProps)

export default connect(mapStateToProps)(App);
