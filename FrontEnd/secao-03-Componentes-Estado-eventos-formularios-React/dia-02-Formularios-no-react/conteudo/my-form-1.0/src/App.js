import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade:0,
      vaiComparecer:'check',
      select:'Daniel',
    };
  }


  handleChange({ target }) {
    const {name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
  
    this.setState({
      [name]:value
    });
  
  }
  

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <input
            type="number"
            name="idade"
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            name="vaiComparecer"
            value={this.state.vaiComparecer}
          onChange={this.handleChange}
          />
          <select
          type="select"
          name="select"
          value={this.state.select}
          onChange={this.handleChange}
          >
            <option>
             Daniel
            </option>
            <option>
              Morais
            </option>
            <option>
              De
            </option>
          </select>
        </form>
      </div>
    );
  }
}

export default App;