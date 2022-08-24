// //Exercicio 1 parte I objetos


// // let info = {
// //   personagem: 'Margarida',
// //   origem: 'Pato Donald',
// //   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// // };

// // // console.log("Bem-vinda ",info['personagem']);

// // //Exercicio 2
// // info['recorrente']='sim';

// // // console.log(info);


// // //Exercicio 3
// // // for (key in info){
// // //   console.log(key);
// // // }
// // // for (key in info){
// // //   console.log(info[key]);
// // // }

// // // info['personagem'] = {'Tio Patinhas'} 
// // // info['origem'] = {"Christmas on Bear Mountain, Dell's Four Color Comics #178"};
// // // info['nota'] ={'O último MacPatinhas'};
// // // info['recorrente']=info['recorrente'] - 'sim';
// // // info['recorrente']='ambas';
// // //  console.log(info);

// // let leitor = {
// //   nome: 'Julia',
// //   sobrenome: 'Pessoa',
// //   idade: 21,
// //   livrosFavoritos: [
// //     {
// //       titulo: "O Pior Dia de Todos",
// //       autor: 'Daniela Kopsch',
// //       editora: 'Tordesilhas',
// //     },
// //   ],
// // };

// // // console.log('O livro favorito de ' + leitor['nome'] + " " + leitor['sobrenome'] + ' se chama ' + leitor['livrosFavoritos']['0']['titulo']);
// // let objeto={
// //   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
// //   autor: 'JK Rowling',
// //   editora: 'Rocco',

// // }
// // leitor['livrosFavoritos'].push(objeto);

// // // console.log(leitor);


// // console.log(leitor['nome'] + ' ' + 'tem '+ leitor['livrosFavoritos'].length + ' ' + "Livros favoritos"  )

// // Exercicios de funcoes,lembrando que énecessario consultar adocumentacao 

// function PalindromeVerification(obj){
//   newArray=[];
// for (index=obj.length-1;index>=0;index--){
//   newArray.push(obj[index])
// }
//   if (newArray.reverse() === newArray){
//     return true;
//   }
//   return false;

// }


// function PalindromeVerify(str){
//   let reverso = str.split('').reverse().join('');
//   if(str===reverso){
//     return true;
//   }
//   return false;



// }
// console.log(PalindromeVerify('arara'));


// str= 'arara';

// console.log(str.split('').join(''));

function PalindromeVerification(str){

let reverso='';
   
   for (i=str.length-1;i>=0;i--){
    reverso=reverso+str[i];   
   }
   if (reverso===str){
    return true;
   }
   return false;
   




}
console.log(PalindromeVerification('macaco'));












