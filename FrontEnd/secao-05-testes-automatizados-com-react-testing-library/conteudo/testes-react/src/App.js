
import React from 'react';
import './App.css';
import ValidEmail from './components/validEmail';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',saveEmail: '',isSubmitted:false, };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
   const {value} = this.state;
    event.preventDefault();
    this.setState({saveEmail:value},()=>{
      this.setState({value:'',isSubmitted:true,}
      )}
  )
    
      }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input data-testid="sub-btn" type="submit" value="Submit" />
      </form>
      
       <ValidEmail email={ this.state.saveEmail } />
      

      </div>
    );
  }
}

export default App;
