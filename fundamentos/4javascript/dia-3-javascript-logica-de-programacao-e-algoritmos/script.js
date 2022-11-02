
// // // // //Primeiro devemos declarar uma variável Numero que desejamos aplicar a fatoração.
// // // // // let Numero= 10;

// // // // // //Segundo , deveremos aplicar uma estrutura de repetiçào n tal estrutura deverá ser feita de modo reverso , ouseja , começando do final e depois regredindo 
// // // // // let a=1;
// // // // // for (i=Numero;i>0;i--){

// // // // //     a=a*i

     
  
    

// // // // // }
// // // // // // agora devemos aplicar o conlsole.log
// // // // // console.log(a);


// // // // // let word= "Marcela" ;
// // // // // Resultado=" ";
// // // // // for (i=word.length-1;i>=0;i--){
// // // // //     Resultado = Resultado+word[i];
// // // // // }
// // // // // console.log(Resultado);


// // // // // IdadeNoel = 50;
// // // // // IdadeEllen = 30;
// // // // // IdadeNasc  =35;


// // // // //     if (IdadeNoel>=IdadeEllen && IdadeEllen>IdadeNasc){
// // // // //         console.log("Nasc é a pessoa mais nova");

    

// // // // //     }else if(IdadeNoel<IdadeEllen && IdadeEllen<=IdadeNasc){
// // // // //         console.log("Noel é a pessoa mais nova")
        
// // // // //     }else if(IdadeNoel===IdadeEllen && IdadeEllen < IdadeNasc){
// // // // //         console.log("Noel e Ellen sao as pessoas mais novas");

// // // // //     }else if (IdadeNoel>=IdadeNasc && IdadeNasc>IdadeEllen){
// // // // //         console.log("Ellen é a pessoa mais nova");
// // // // //     }else if (IdadeNoel===IdadeNasc && IdadeNasc< IdadeEllen){
// // // // //         console.log("Noel e Nasc sao as pessoas mais novas");
// // // // //     }else if (IdadeNoel>IdadeNasc && IdadeNasc===IdadeEllen){
// // // // //         console.log("Ellen e Nasc sao os mais novos");
// // // // //     }else if(IdadeNoel===IdadeNasc && IdadeNasc===IdadeEllen){
// // // // //         console.log("Noel ,Nasc e Ellen tem idade iguais");
// // // // //     }
// // // // //     else{
// // // // //         console.log("idade inválida");
// // // // //     }

// // // // let array = ['java', 'javascript', 'python', 'html', 'css'];


// // // // for (i=0;i<array.length;i++){
// // // //   let NumerosMenores = [];
// // // //   for (j=0;j<array.length;j++){
// // // //     if (array[i].length > array[j].length)
// // // //     NumerosMenores.push(array[j]);
    
// // // //   }
  
// // // // if (NumerosMenores.length === 4){
// // // // console.log (array[i]);
// // // //   }
// // // // }


// // // let diasDaSemana = {
// // //   1: 'domingo',
// // //   2: 'segunda',
// // //   3: 'terça',
// // //   4: 'quarta',
// // //   5: 'quinta',
// // //   6: 'sexta',
// // //   7: 'sábado',
// // // };

// // // diasDaSemana["1"]; // SyntaxError: Unexpected number
// // // console.log(diasDaSemana['1']); // domingo


// // // let conta = {
// // //   agencia: '0000',
// // //   banco: {
// // //     cod: '012',
// // //     id: 4,
// // //     nome: 'TrybeBank',
// // //   },
// // // };

// // // let infoDoBanco = 'banco';
// // // console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
// // // console.log(conta[infoDoBanco]['nome']); // TrybeBank

// // // console.log(conta.agencia); // 0000
// // // console.log(conta['agencia']); // 0000

// // // console.log(conta.banco.cod); // 012
// // // console.log(conta['banco']['id']); // 4

    

// // let usuario = {
// //   id: 99,
// //   email: 'jakeperalta@gmail.com',
// //   infoPessoal: {
// //     nome: 'Jake',
// //     sobrenome: 'Peralta',
// //     endereco: {
// //       rua: 'Smith Street',
// //       bairro: 'Brooklyn',
// //       cidade: 'Nova Iorque',
// //       estado: 'Nova Iorque',
// //     },
// //   },
// // };

// // console.log(usuario['infoPessoal']['endereco']['estado']);


// let moradores = [
//   {
//     nome: 'Luiza',
//     sobrenome: 'Guimarães',
//     andar: 10,
//     apartamento: 1005,
//   },
//   {
//     nome: 'William',
//     sobrenome: 'Albuquerque',
//     andar: 5,
//     apartamento: 502,
//   },
//   {
//     nome: 'Murilo',
//     sobrenome: 'Ferraz',
//     andar: 8,
//     apartamento: 804,
//   },
//   {
//     nome: 'Zoey',
//     sobrenome: 'Brooks',
//     andar: 1,
//     apartamento: 101,
//   },
// ];

// console.log(moradores[1]['apartamento']);
     


