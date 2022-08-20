
let NumerosMegaSena = [];
for (index = 0 ; index < 6 ; index ++ )
{
    NumerosMegaSena.push(Math.floor((Math.random()*60))+1 );
    if (index>0) {

    for (index2=0;index2<NumerosMegaSena.length-1;index2++){

        if (NumerosMegaSena[index2] === NumerosMegaSena[index]){

        NumerosMegaSena.splice(index,1);
        index=index-1;
        

        }else {

        index=index;
        }

    

}
     
}
}

let acertos=[];


let JornadaDoUsuario =[1,2,3,4,5]










for (indice=0;indice<JornadaDoUsuario.length-1;indice ++){
    for (i=0;i<NumerosMegaSena.length-1;i++){
        if (NumerosMegaSena[i]===JornadaDoUsuario[indice]){
            acertos.push(1);
        }else{

        
        acertos=acertos;

        }
        
    }

}

console.log("Seu numero de acertos sào : " + acertos.length);








// let SequenciaDoUsuario = [];


// for (indiceAtual = 0 ; indiceAtual< SequenciaDoUsuario.length()-1 ; indiceAtual++) {
//     for (i=0;i<NumerosMegaSena.length() -1;i++){

//     }

