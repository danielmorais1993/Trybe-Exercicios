// // // // //Exercicio 1 parte I objetos


// // // // // let info = {
// // // // //   personagem: 'Margarida',
// // // // //   origem: 'Pato Donald',
// // // // //   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// // // // // };

// // // // // // console.log("Bem-vinda ",info['personagem']);

// // // // // //Exercicio 2
// // // // // info['recorrente']='sim';

// // // // // // console.log(info);


// // // // // //Exercicio 3
// // // // // // for (key in info){
// // // // // //   console.log(key);
// // // // // // }
// // // // // // for (key in info){
// // // // // //   console.log(info[key]);
// // // // // // }

// // // // // // info['personagem'] = {'Tio Patinhas'} 
// // // // // // info['origem'] = {"Christmas on Bear Mountain, Dell's Four Color Comics #178"};
// // // // // // info['nota'] ={'O último MacPatinhas'};
// // // // // // info['recorrente']=info['recorrente'] - 'sim';
// // // // // // info['recorrente']='ambas';
// // // // // //  console.log(info);

// // // // // let leitor = {
// // // // //   nome: 'Julia',
// // // // //   sobrenome: 'Pessoa',
// // // // //   idade: 21,
// // // // //   livrosFavoritos: [
// // // // //     {
// // // // //       titulo: "O Pior Dia de Todos",
// // // // //       autor: 'Daniela Kopsch',
// // // // //       editora: 'Tordesilhas',
// // // // //     },
// // // // //   ],
// // // // // };

// // // // // // console.log('O livro favorito de ' + leitor['nome'] + " " + leitor['sobrenome'] + ' se chama ' + leitor['livrosFavoritos']['0']['titulo']);
// // // // // let objeto={
// // // // //   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
// // // // //   autor: 'JK Rowling',
// // // // //   editora: 'Rocco',

// // // // // }
// // // // // leitor['livrosFavoritos'].push(objeto);

// // // // // // console.log(leitor);


// // // // // console.log(leitor['nome'] + ' ' + 'tem '+ leitor['livrosFavoritos'].length + ' ' + "Livros favoritos"  )

// // // // // Exercicios de funcoes,lembrando que énecessario consultar adocumentacao 

// // // // function PalindromeVerification(obj){
// // // //   newArray=[];
// // // // for (index=obj.length-1;index>=0;index--){
// // // //   newArray.push(obj[index])
// // // // }
// // // //   if (newArray.reverse() === newArray){
// // // //     return true;
// // // //   }
// // // //   return false;

// // // // }


// // // // function PalindromeVerify(str){
// // // //   let reverso = str.split('').reverse().join('');
// // // //   if(str===reverso){
// // // //     return true;
// // // //   }
// // // //   return false;



// // // // }
// // // // console.log(PalindromeVerify('arara'));


// // // // str= 'arara';

// // // // console.log(str.split('').join(''));

// // // function PalindromeVerification(str){

// // // let reverso='';

// // //    for (i=str.length-1;i>=0;i--){
// // //     reverso=reverso+str[i];   
// // //    }
// // //    if (reverso===str){
// // //     return true;
// // //    }
// // //    return false;


// // //Exercicio 2






// // // }
// // // console.log(PalindromeVerification('macaco'));




// // // function getMaxOfArray(arrayTeste){




// // // }
// // // function getMaxOfArray(ArrayNumber){

// // // return Math.max.apply(null,ArrayNumber);
// // // }

// // // console.log(getMaxOfArray([1,2,3,4,5]));
// // function getMaxOfArray(numberArray) {

// //    for (j in numberArray) {
// //       max = [];
// //       for (i in numberArray) {
// //          if (numberArray[j] > numberArray[i]) {
// //             max.push(numberArray[i]);
// //          }
// //          if ((max.length) === numberArray.length - 1) {
// //             return  numberArray[j] + " " + "e índice" + " " + j;
// //          }
// //       }

// //    }
// // }

// //    console.log(getMaxOfArray([2, 3, 6, 7, 10, 1]));


//    function getMinOfArray(numberArray) {

//       for (j in numberArray) {
//          min = [];
//          for (i in numberArray) {
//             if (numberArray[j] < numberArray[i]) {
//                min.push(numberArray[i]);
//             }
//             if ((min.length) === numberArray.length - 1) {
//                return  numberArray[j] + " " + "e índice" + " " + j;
//             }
//          }

//       }
//    }

//    console.log(getMinOfArray([2, 4, 6, 7, 10, 0, -3]));  


//Exercicio 4

// function GetMaxStringOfArray(StringArray){
//    stringmax=[];
//    for (j in StringArray){
//       for (i in StringArray[j]){
//          if (StringArray[j].length > StringArray[i].length ){
//             stringmax.push(StringArray[i]);

//          }
//          if (stringmax.length ===StringArray.length -1){
//             return StringArray[j];
//          }


//       }

//    }
// }
// console.log(GetMaxStringOfArray( ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function GetRepetitions(ArrayTest) {
   CountRepeat = [];
   for (j in ArrayTest) {

      Resultado = 0;
      for (i in ArrayTest) {
         if (ArrayTest[j] === ArrayTest[i]) {
            Resultado += 1;
         } else {
            Resultado = Resultado;
         }


      }
      CountRepeat.push(Resultado);

      



   }
   
      for (k in CountRepeat) {
         max = [];
         for (m in CountRepeat) {
            if (CountRepeat[k] >= CountRepeat[m]) {
               max.push(CountRepeat[m]);
            }
            if ((max.length) === CountRepeat.length) {
               return ArrayTest[k];
            }
         }

      }






}





console.log(GetRepetitions([2, 4, 5, 2, 9, 2, 1]));



