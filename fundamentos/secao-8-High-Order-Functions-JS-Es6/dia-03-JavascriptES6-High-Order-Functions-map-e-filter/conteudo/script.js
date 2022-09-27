
// const techProducts = [
//   { id: 1, name: 'computer', price: 2100 },
//   { id: 2, name: 'mouse', price: 78 },
//   { id: 3, name: 'monitor', price: 589 },
//   { id: 4, name: 'keyboard', price: 78 },
//   { id: 5, name: 'HD', price: 350, },
//   { id: 6, name: 'webcam', price: 187, },
//   { id: 7, name: 'mic', price: 78 },
//   { id: 8, name: 'headset', price: 216 },
// ];
// //1 - Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares
// const findEven = (products) => {
//   const number = products.filter((e) => e.id % 2 === 0 )
//   .map((product)=>product.name)
//   return number
// }
// console.log(findEven(techProducts))
// //2 - Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
// const higher300 = () => {
//   const answer = techProducts.some((e)=>e.price>300)
//   return answer
// }
// console.log(higher300(techProducts))
// //3 - Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
// const totalPrice=(identidade,quantidade) => {
//  const result = techProducts.filter((e)=> e.id===identidade)
//   .map((element)=> element.price)



// return result*quantidade

// }
// console.log(totalPrice(1,3))
// //4 - Crie um algoritmo que dado um preço retorne todos os produtos com preços iguais

// const equalPrice = () => {
//   const newArray=[];
//   techProducts.forEach((element)=>{
//     newArray.push(element.price)
//   })
//   const productEquals = newArray.filter((element,index,array)=>index!==array.indexOf(element))
//   const play = techProducts.filter((e)=>e.price===productEquals[0])
//   return play
// }
// console.log(equalPrice())

// const persons = [
//   { firstName: 'Maria', lastName: 'Ferreira' },
//   { firstName: 'João', lastName: 'Silva' },
//   { firstName: 'Antonio', lastName: 'Cabral' }
// ];

// const fullNames = [];
// persons.map((element)=>{
// console.log(`${element.firstName} ${element.lastName}`)
// })

// console.log(fullNames);


const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

// const allNameStudents = [];


// const estudantesTurnoManhã = estudantes.map((element)=>{return element.turno==='Manhã' ? `${element.nome} ${element.sobrenome}` : 

// })
// allNameStudents.push(estudantesTurnoManhã)


// console.log(allNameStudents);
// const reportStatus = (name,students) =>{
//  const studentInfo =  students.find((element)=>element.nome === name).materias.map((e)=>e.nota>=60 ?`${e.name}  'aprovado'` : `${e.name} 'Reprovado'`)
// return studentInfo;
// }

// console.log(reportStatus('Natalia',estudantes))

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
      birthYear: 1920,
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



 const infoBook = () => {
  return books.map((element) =>`${element.name} ${element.genre} ${element.author.name}`);

 }




const authorNameAge = () => {
 const ageAndAuthor = books.map((element)=>{
  const obj =  {
      age: (element.releaseYear - element.author.birthYear),
      author : element.author.name
    
    }

    return obj

  })

 const ageAndAuthorSort = ageAndAuthor.sort((a,b)=>a.age-b.age)
 
  return ageAndAuthorSort
}

const  fantasyOrScienceFiction = () => {
  const findGenre = books.filter((element)=>{
    return  element.genre === 'Ficção Científica'|| element.genre === 'Fantasia'

  })

  return findGenre

}
function oldBooksOrdered() {
  const booksMore60 = books.filter((element)=>{
    return (Number(2022)-element.releaseYear > 60 )
  })
  const booksMore60Ordered = booksMore60.sort((a,b)=>{
    return a.releaseYear - b.releaseYear
  })

  return booksMore60Ordered


  
}
