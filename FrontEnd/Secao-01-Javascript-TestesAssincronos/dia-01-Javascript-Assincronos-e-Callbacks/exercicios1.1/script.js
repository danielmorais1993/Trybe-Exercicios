// // // // const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
// // // //   `${name} está a ${value} ${measurementUnit} de distância do Sol`;

// // // // const MEASUREMENT_UNIT = 'quilômetros';

// // // // const mars = {
// // // //   name: 'Marte',
// // // //   distanceFromSun: {
// // // //     value: 227900000,
// // // //     measurementUnit: MEASUREMENT_UNIT,
// // // //   },
// // // // };

// // // // const venus = {
// // // //   name: 'Venus',
// // // //   distanceFromSun: {
// // // //     value: 108200000,
// // // //     measurementUnit: MEASUREMENT_UNIT,
// // // //   },
// // // // };

// // // // const jupiter = {
// // // //   name: 'Jupiter',
// // // //   distanceFromSun: {
// // // //     value: 778500000,
// // // //     measurementUnit: MEASUREMENT_UNIT,
// // // //   },
// // // // };

// // // // console.log(planetDistanceFromSun(mars)); // A
// // // // console.log(planetDistanceFromSun(venus)); // B
// // // // console.log(planetDistanceFromSun(jupiter)); // C

// // // const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
// // //   `${name} está a ${value} ${measurementUnit} de distância do Sol`;

// // // const MEASUREMENT_UNIT = 'quilômetros';

// // // const mars = {
// // //   name: 'Marte',
// // //   distanceFromSun: {
// // //     value: 227900000,
// // //     measurementUnit: MEASUREMENT_UNIT,
// // //   },
// // // };

// // // const venus = {
// // //   name: 'Venus',
// // //   distanceFromSun: {
// // //     value: 108200000,
// // //     measurementUnit: MEASUREMENT_UNIT,
// // //   },
// // // };

// // // const jupiter = {
// // //   name: 'Jupiter',
// // //   distanceFromSun: {
// // //     value: 778500000,
// // //     measurementUnit: MEASUREMENT_UNIT,
// // //   },
// // // };

// // // console.log(planetDistanceFromSun(mars)); // A
// // // setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
// // // setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

// // // const getPlanet = () => {
// // //   const mars = {
// // //     name: 'Mars',
// // //     distanceFromSun: {
// // //       value: 227900000,
// // //       measurementUnit: 'kilometers',
// // //     },
// // //   };
// // //   console.log('Returned planet: ', mars);
// // // };

// // // setTimeout(()=>getPlanet(),3000)

// // // const messageDelay = () => Math.floor(Math.random() * 5000);

// // // const getMarsTemperature = () => {
// // //   const maxTemperature = 58;
// // //   const result = Math.floor(Math.random() * maxTemperature);
// // //   return `A temperatura de Marte é: ${result} graus celsius`

// // // };

// // // // crie a função sendMarsTemperature abaixo

// // // setTimeout(()=>console.log(getMarsTemperature()),messageDelay()); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

// // const messageDelay = () => Math.floor(Math.random() * 5000);

// // const getMarsTemperature = () => {
// //   const maxTemperature = 58;
// //   return Math.floor(Math.random() * maxTemperature);
// // };
// // const handleError = (errorReason) =>
// //   console.log(`Error getting temperature: ${errorReason}`);

// // const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

// // const temperatureInFahrenheit = (temperature) =>
// //   console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

// // // const greet = (temperature) =>
// // //   console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

// // // const sendMarsTemperature = (callback,callback2) =>{
// // //   if (10*Math.random() <= 6){
// // //   const temperature = getMarsTemperature();
// // //   return callback(temperature);
// // //   }else{
// // //     callback2('Robot is busy')  
// // //   }
// // // }


// // // // Definição da função sendMarsTemperature...

// // // setTimeout(()=>sendMarsTemperature(temperatureInFahrenheit,handleError),messageDelay()); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

// // // setTimeout(()=>sendMarsTemperature(greet,handleError),messageDelay()); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo
// function cow(element) {
//     return element 
//  }
 
//  const uppercase = (str, callback) => {
//     setTimeout(() => {
//     console.log(  callback(str.toUpperCase()));
//    }, 500);
//  };


// uppercase('Marcela',cow)
const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grama',
    ability: 'Raio Solar',
  },
  {
    name: 'Charmander',
    type: 'Fogo',
    ability: 'Lança Chamas',
  },
  {
    name: 'Squirtle',
    type: 'Água',
    ability: 'Jato de Água',
  },
];

function getPokemonDetails(selectedPokemon, callback) {
  const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

  setTimeout(() => {
    if (foundPokemon === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }

    const { name, type, ability } = foundPokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

 const handlePokemonSearch = (error, message) => {
   if(error===null){
    console.log(message)
   }else{
    console.log(error.message)
   }
    
 };

getPokemonDetails('Gyarados', handlePokemonSearch);