
// const yearSeasons = {
//   spring: ['March', 'April', 'May'],
//   summer: ['June', 'July', 'August'],
//   autumn: ['September', 'October', 'November'],
//   winter: ['December', 'January', 'February'],
// };



// const {spring,summer,autumn,winter} = yearSeasons;

// console.log([...spring,...summer,...autumn,/])

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};
// // name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade

// // complete a assinatura da função abaixo
// const personLikes = (obj) => {
//   obj
//  const {name,age,likes}= obj
//  return  `${name} is ${age} years old and likes ${likes.join(', ')}.`};
// // <nome> tem <anos de idade> e gosta de <gostos da pessoa>

// // Retornos esperados:
// console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];
// const filterPeople = (array) => {

//    array.forEach(element => {
//     const { name, bornIn, nationality } = element

//     if (bornIn > 2000 && nationality === 'Australian') {
//       console.log(name)
//       console.log(bornIn)
//       console.log(nationality)
    

//     } 

//     return name


    
    

//   });


  


// }
// console.log(filterPeople(people))
// const myList = [5, 2, 3];

// const swap = (myList) => {
//   const [f,s,t] = myList;
//   return [t,f,s]
// }

// console.log(swap([5,2,3]))
// const ships = [
//   {
//     name: 'Titanic',
//     length: 269.1,
//     measurementUnit: 'meters',
//   },
//   {
//     name: 'Queen Mary 2',
//     length: 1132,
//     measurementUnit: 'feet',
//   },
//   {
//     name: 'Yamato',
//     length: 256,
//     measurementUnit: 'meters',
//   },
//      // measurementUnit: unidade de medida
// ];


// const shipLength = (array) => {
//   const stringArrays =[];
//    array.forEach((element)=>
//   { const {name,length,measurementUnit} = element;
//     stringArrays.push( (`${name} is ${length} ${measurementUnit} long`))
//     })

//     return stringArrays

// }

// // escreva shipLength abaixo

// // retorno esperado


// console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2]));


