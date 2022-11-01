import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();
    this.fetchJoke=this.fetchJoke.bind(this)
    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    this.setState({loading:true},
      async () => {
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      loading:false,
      jokeObj: requestObject,

    })
  });
  }

  componentDidMount() {
   this.fetchJoke();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }));

    this.fetchJoke();
  };

  render() {
    const { storedJokes,loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <button
       onClick={this.saveJoke}> Salvar Piada</button>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      {
        loading ? loadingElement:''



        /*
        Aqui vamos construir nossa lógica com uma renderização condicional
        do nosso componente Joke, a ideia é renderizar um loading enquanto
        esperamos a nossa requisição de piadas finalizar.

        <p>RENDERIZAÇÃO CONDICIONAL</p>
        */
      }

      </div>
    );
  }
}

export default DadJoke;