import './App.css';
import React , {Component} from 'react';



class App extends Component {
constructor(){
  super()
  this.handleMouseOver = this.handleMouseOver.bind(this)
  this.handleClick = this.handleClick.bind(this)
  this.handleKey = this.handleKey.bind(this)
}
state= {
  variable1:'button',
  variable2:'button',
  variable3:'button',
  clicks:0,
  mouseover:0,
  keyUp:0
}

  handleMouseOver(){
   this.setState((before,_props)=>({
    mouseover: before.mouseover + 1,
    variable1:this.state.mouseover,

   }))
   if (this.state.mouseover%2===0){
    console.log('green');
  }
  }
   handleClick(){
    this.setState((before,_props)=>({
      clicks: before.clicks + 1,
      variable2:this.state.clicks,
     }))
  }
   handleKey(){
    this.setState((before,_props)=>({
      keyUp: before.keyUp + 1,
      variable3:this.state.keyUp
     }))
  }
  getColor(number){
    if(this.state.%2===0){
      return'green';
  }
}
  render(){
    const { variable1,variable2,variable3} = this.state
    return (
      <div>
        <button onMouseOver={this.handleMouseOver}>{variable1}</button>
        <button onClick={this.handleClick}>{variable2}</button>
        <button onKeyUp={this.handleKey}>{variable3}</button>
      </div>
    )
  }
  
    

  
}

export default App;
