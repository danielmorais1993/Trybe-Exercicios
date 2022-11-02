// verifyIsNumber = (value1,value2) => {
//   if(typeof value1 !== 'number' || typeof value2 !=='number' ){
//   throw new Error('Os valores devem ser numéricos');
//   }
// }



// verifyIsString = (result) => {
//   if(typeof result ==='number'  &&   result.toString()==='NaN' ){
//   throw new Error('Existe um ou dois dos valores que não é um número');
//   }
// }
// changeCultureUse = (str) => {
//   // if (str.toString().includes(',')){
    
    
//     str.replace(',','.');
    
//     parseFloat(str)
//     return str;
//     return parseFloat(str);
    
//   }
//   r
 

// console.log(changeCultureUse('1,2'))
// a=1,2+1,2;
// console.log(parseFloat(a,'4'))





// function sum() {  
//   const value1 =parseFloat(document.getElementById('value1').value);
//   const value2 = parseFloat(document.getElementById('value2').value);

//   console.log(value1,value2)
      
//     try{
//       verifyIsNumber(value1,value2);
//       verifyIsString(value1,value2);
//       console.log(value1,value2);
//       const result = value1 + value2;
//       console.log(result)
//       console.log(typeof(result));
      
//       document.getElementById('result').innerHTML = `Resultado: ${result}`;
//       document.getElementById('value1').value = '';
//       document.getElementById('value2').value = '';
      
//     }catch(e){
//       const result = e.message;
//       console.log(result)
//       document.getElementById('result').innerHTML= `Resultado: ${result}`;
//       document.getElementById('value1').value = '';
//       document.getElementById('value2').value = '';
//       console.log(typeof(result));
       

//     }

  
  

  

 
  
 
  
  
 
// }
// window.onload = () =>{
//   const button = document.getElementById('button');
//   button.addEventListener('click', sum);
// }

// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       },
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       },
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     },
//   },
//   payment: {
//     total: 60,
//   },
// };

// const customerInfo = (order) => {
//   console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para : ${order.name}, Telefone: ${order.phoneNumber} , ${order.address.street} ${order.address.number} ${order.address.apartment} `)
//   // Adicione abaixo as informações necessárias.

// };

// customerInfo(order);

// const orderModifier = (order) => {
//  order.name='Luiz Silva';
 
//  order.payment.total = 'R$ 50,00';




//   return  console.log(`Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)}  e ${order.order.drinks.coke.type} é de ${order.payment.total }   }`)
 


//   // Adicione abaixo as informações necessárias.

// };

// orderModifier(order);


const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
      list = { value: array[i], rest: list };
  }
  return list;
}


const addlesson2 = (obj,chave,valor) => {

obj[chave]=valor;
}
const keysObject = (obj) => {
  
  const chavesDeUmObjeto = Object.keys(obj);
  return arrayToList(chavesDeUmObjeto);
}
const lengthObject = (obj) => {

  const tamanhoDoObjeto =  keysObject(obj).length;
  return tamanhoDoObjeto;
}
const valuesObject = (obj) => {
  const chavesDeUmObjeto = Object.values(obj);
  return arrayToList(chavesDeUmObjeto);
}

addlesson2(lesson2,'turno','noite');
let allLessons = {};
const a = {lesson1}
const b = {lesson2}
const c = {lesson3}

console.log(Object.assign(allLessons,a,b,c));
const studReturn = (obj) => {
  
  return (lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes);

}

console.log(studReturn(allLessons))

const valueOfKey = (obj,index) => {
 array = Object.values(obj);
 
 let resultado = array[index];

 return resultado;

}



const eventKeyValue = (obj,key,value) => {
  let make = [key , value]
  


  for (i=0 ; i<Object.entries(obj).length;i++){
    const found =  make.toString().includes(Object.entries(obj)[i]);

    if (found){
      return found
    }



  }
  return false


}

const createLesson = (obj,lesson) => {
  const allValues = Object.values(allLessons);
 
  let valor=0;
  for (i=0 ; i<Object.entries(obj).length;i++){
 if( Object.values(allValues[i]).includes(lesson)){
  valor = valor + parseInt(Object.values(allValues[i])[1])

  

  

 }

  
  }
  return valor;
}




// console.log(Object.values(Object.values(allLessons)[0]))
 console.log(createLesson(allLessons,'Matemática'));


 const createReport = (obj,professor) => {
  const allValues = Object.values(allLessons);
  let materia = '';
  const relatório = {
    professor:''
    ,
    aulas:''
    ,
    estudantes:0
  }
 
  
  for (i=0 ; i<Object.entries(obj).length;i++){
 if( Object.values(allValues[i]).includes(professor)){
  relatório.professor = professor;
  
 relatório.aulas =relatório.aulas + Object.values(allValues[i])[0];
 relatório.estudantes = createLesson(obj,Object.values(allValues[i])[0]);

  

 }
  }
  return relatório;
}


console.log(createReport(allLessons,'Carlos'));
















