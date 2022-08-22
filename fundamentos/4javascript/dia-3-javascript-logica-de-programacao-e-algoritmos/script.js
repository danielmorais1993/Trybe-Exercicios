
//Primeiro devemos declarar uma variável Numero que desejamos aplicar a fatoração.
// let Numero= 10;

// //Segundo , deveremos aplicar uma estrutura de repetiçào n tal estrutura deverá ser feita de modo reverso , ouseja , começando do final e depois regredindo 
// let a=1;
// for (i=Numero;i>0;i--){

//     a=a*i


     
  
    

// }
// // agora devemos aplicar o conlsole.log
// console.log(a);


// let word= "Marcela" ;
// Resultado=" ";
// for (i=word.length-1;i>=0;i--){
//     Resultado = Resultado+word[i];
// }
// console.log(Resultado);


IdadeNoel = 50;
IdadeEllen = 30;
IdadeNasc  =35;


    if (IdadeNoel>=IdadeEllen && IdadeEllen>IdadeNasc){
        console.log("Nasc é a pessoa mais nova");

    

    }else if(IdadeNoel<IdadeEllen && IdadeEllen<=IdadeNasc){
        console.log("Noel é a pessoa mais nova")
        
    }else if(IdadeNoel===IdadeEllen && IdadeEllen < IdadeNasc){
        console.log("Noel e Ellen sao as pessoas mais novas");

    }else if (IdadeNoel>=IdadeNasc && IdadeNasc>IdadeEllen){
        console.log("Ellen é a pessoa mais nova");
    }else if (IdadeNoel===IdadeNasc && IdadeNasc< IdadeEllen){
        console.log("Noel e Nasc sao as pessoas mais novas");

    }else if (IdadeNoel>IdadeNasc && IdadeNasc===IdadeEllen){
        console.log("Ellen e Nasc sao os mais novos");
    }else if(IdadeNoel===IdadeNasc && IdadeNasc===IdadeEllen){
        console.log("Noel ,Nasc e Ellen tem idade iguais");
    }
    else{
        console.log("idade inválida");
    }


    
     
