const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1921,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];



function authorBornIn1947() {
  const firstperson = books.find((element) => element.author.birthYear == 1947);
  return firstperson.author.name

}

console.log(authorBornIn1947())


function smallerName() {
  let Books = [];
  let newArray = [];
  let nameBook;
  books.forEach((element) => {

    newArray.push((element.name).length);
    Books.push(element.name)

  })
  console.log(Books)
  console.log(newArray)

  nameBook = Books[((Math.min(...newArray)))]
  return nameBook;
}
console.group(smallerName())


function getNamedBook(value) {
  const findName = books.find((element) => (element.name).length === value)
  return findName.name
}

console.log(getNamedBook(26));





// function booksOrderedByReleaseYearDesc() {
//   books.sort((a,b )=> {
//   return b.author.birthYear - a.author.birthYear
//   })
// }

// booksOrderedByReleaseYearDesc()
// console.log(books)






// const numbers = [19, 21, 30, 3, 45, 22, 15];
// let isEven2 = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
// while (isEven2 !== undefined) {

// valor = numbers.indexOf(isEven2)

//  numbers.splice(valor,1);

// isEven2 = numbers.find((number) => number % 3 === 0 && number % 5 === 0);


//  console.log(isEven2); // 30

// }

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = () => {
//   const number = numbers.find((number) => number%5===0 && number%3===0)
//   return number
// };

// console.log(findDivisibleBy3And5());

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = () => {
//   const findthis = names.find((element) => element.length===5 );
//   return findthis
// };

// console.log(findNameWithFiveLetters());


// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ];

// function findMusic(id) {
//   const findmusic = musicas.find((element)=> element.id === id)
//   return findmusic.title

// };

// console.log(findMusic('31031685'));


// const people = [
//   { name: 'Mateus', age: 18 },
//   { name: 'José', age: 16 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// people.sort((a,b) => {
//   return b.age - a.age;


// })
// console.log(people);




function everyoneWasBornOnSecXX() {
  let newArray = [];
  let checkValor =[];
  
  books.forEach((element) => {
    newArray.push(element.author.birthYear);

  })
  newArray.forEach((element,index,array) => {
    const elemento=element
    console.log(elemento)
  array[index]=100
  console.log(array)
   

    
    
   const valor = array.some((name)=> name===elemento)
   checkValor.push(valor)
   array[index]=element


  })
  console.log(newArray)
  console.log(checkValor)

  if(checkValor.some((element)=>element===true)){
    return true;
  }else{
    return false
  }

}
 console.log(everyoneWasBornOnSecXX())
// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
// return arr.some(() => {return name})
// };

// console.log(hasName(names, 'Ana'));

