
// let NumerosMegaSena = [];
// for (index = 0 ; index < 6 ; index ++ )
// {
//     NumerosMegaSena.push(Math.floor((Math.random()*60))+1 );
//     if (index>0) {

//     for (index2=0;index2<NumerosMegaSena.length-1;index2++){

//         if (NumerosMegaSena[index2] === NumerosMegaSena[index]){

//         NumerosMegaSena.splice(index,1);
//         index=index-1;


//         }else {

//         index=index;
//         }



// }

// }
// }

// let acertos=[];


// let JornadaDoUsuario =[1,2,3,4,5]










// for (indice=0;indice<JornadaDoUsuario.length-1;indice ++){
//     for (i=0;i<NumerosMegaSena.length-1;i++){
//         if (NumerosMegaSena[i]===JornadaDoUsuario[indice]){
//             acertos.push(1);
//         }else{


//         acertos=acertos;

//         }

//     }

// }

// console.log("Seu numero de acertos sào : " + acertos.length);





// function dice () { 
//     return Math.ceil(Math.random() * 6);
// }
// let d1 = dice();
// let d2 = dice();
// while (d1 === d2) {
//     d2 = dice();
// } 

// console.log(d1,d2);




// Exercicio 1
// let resultado = 0;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for( i=0 ; i< numbers.length -1 ;i++){
//         console.log(numbers[i]);
// }


// for( i=0 ; i< numbers.length -1 ;i++){
//     let maior =[];
//     // resultado += numbers[i];

//     for (index=0;index<numbers.length -1;index++){

//         if (numbers[i]>numbers[index]) {

//         maior.push(numbers[i]);
//         }
//         if (maior.length===8)

//         console.log(numbers[i]);

// let impares=[];
// for (i=0;i<numbers.length-1;i++){
//    if(numbers[i]%2===1){
//     impares.push(numbers[i]);
//    }




// }

// console.log(impares);


// for (i = 0; i < numbers.length - 1; i++) {
//     let menor = [];
//     // resultado += numbers[i];

//     for (index = 0; index < numbers.length - 1; index++) {

//         if (numbers[i] < numbers[index]) {

//             menor.push(numbers[i]);
//         }
//         if (menor.length === 8)

//             console.log(numbers[i]);

//     }
// }

















// console.log(resultado);

// let MedArit;
// MedArit = resultado/numbers.length
// console.log(MedArit); 
// if (MedArit > 20 ){
//     console.log("valor maior que 20");
// }
// else {
//     console.log("valor menor ou igual a 20");
// }
//  Numeros=[];
//  for(i=1;i<26;i++){
//    Numeros.push(i);

// }
// console.log(Numeros);

// for (index=0;index<Numeros.length - 1 ; index++){
//    let resultado = Numeros[index]/2;
//    console.log(resultado);
// }


// encontre numeros inteiros impares
// encontrar numeros no Array
// numeros divisiveis por 3



// let numeros=[10,3,5,8,3,2];
// let number=20;
// let numerosEncontrados = [];


// for (i=0;i<numeros.length;i++){
//     if (number ===numeros[i]){
//         numerosEncontrados.push(numeros[i])
//         console.table(numerosEncontrados);

//     }
    
   
    
// }
// if (numerosEncontrados.length === 0){
//     console.log("Não enontrado");
// }
// const n = 9;

// let resultado = 100;
// for (let index = 0; index <= n; index += 1) {
//   resultado -= index;
// };
// console.log(resultado);

