// ./src/App.js
import Pokedex from './Components/PokeAPI';
// import TrybeMail from './Components/TrybeMail';

// import emails from './data/emails';

function App () {
  // const [name, setName] = useState('');
  // const [age, setAge] = useState(0);
  // const [module, setModul] = useState();
  // const [city, setCity] = useState('');

  return (
    <div>
      {/* <TrybeMail emails={emails}/> */}
      <Pokedex />
      {/* <form
        onSubmit={(event)=> event.preventDefault()}>

        <input type="text"
        onChange={({target})=>setName(target.value)}
        value={name}
        />
        <label>
          Idade :
        <input type="number"
           onChange={({target})=>setAge(target.value)}
           value={age}/>
           <label>
            Cidade:
             <input type="text"
           onChange={({target})=>setCity(target.value)}
           value={city}/>
           </label>
           </label>
          <label>
            Digite o módulo que você está:
            <label>
            fundamentos
             <input type="radio"
             value="fundamentos"
             name="module"
             checked={module === "fundamentos"}
           onChange={({target})=>setModul(target.value)}

           />
           </label>
           <label>
           Front-End

             <input type="radio"
              id="Front-End"
              name="module"
           onChange={({target})=>setModul(target.value)}
           value="Front-End"
           checked={module === "Front-End"}
           />

           </label>
           <label>
           Back-End
             <input type="radio"
             id="Back-End"
              name="module"
           onChange={({target})=>setModul(target.value)}
           value="Back-End"
           checked={module === "Back-End"}/>
           </label>
           <label>
           Ciencia da computacao
                        <input
            id="Ciencia da computacao" type="radio"
              name="module"
           onChange={({target})=>setModul(target.value)}
           checked={module === 'Ciencia da computacao'}
           value="Ciencia da computacao"/>
           </label>
           </label>
           <button
           type="submit"
           >
          Enviar</button>

      </form> */}

    </div>
  );
}

export default App;
