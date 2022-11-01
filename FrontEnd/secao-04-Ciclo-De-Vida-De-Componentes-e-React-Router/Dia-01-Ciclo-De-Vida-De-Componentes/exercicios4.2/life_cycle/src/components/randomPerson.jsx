import React, { Component } from 'react'

class RandomPerson extends Component {
  constructor() {
    super();
    this.fetchPerson=this.fetchPerson.bind(this)

    this.state = {
      objectPerson: undefined,
      loading: false,
      storedJokes: [],
    }
  }

  componentDidMount(){
    this.fetchPerson();

  }
  fetchPerson = async () => {
    this.setState({loading:false},
      async () => {
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const dataPerson = await fetch('https://api.randomuser.me/ ',requestHeaders);
    const requestObject = await dataPerson.json();
    this.setState({
      loading:true,
      objectPerson: requestObject.results[0],

    })
  });



  }
  shouldComponentUpdate(nextProps, nextState){
    const {objectPerson} = this.state;
    if (objectPerson !== undefined){
    return nextState.objectPerson.dob.age < 50;
    }else{
    return  false
    }

  }



  render() {
    const {loading,objectPerson} = this.state;
    // const {picture,email,name,dob} = objectPerson;
    const loadingElement = <span>Carregado...</span>;
    return (
      <div>
        <div>{loading ? 
        <div>
        <img src={objectPerson.picture.large} alt={objectPerson.name.first} />
          <p>{objectPerson.name.title}{objectPerson.name.first}</p>
          <p>{objectPerson.email}</p>
          <p>{objectPerson.dob.age}</p>
  
      </div>
        :loadingElement}</div>
    
      </div>
    )
  }
}
export default RandomPerson;
  /* <section>
        <img src={picture.large} alt={objectPerson.name} />
        <p>{name.title}{name.}</p>
        <p>{email}</p>
        <p>{dob}</p>
        </section>
         */