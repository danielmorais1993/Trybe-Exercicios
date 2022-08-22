//

// let Nota =76;

// if (Nota  <=50){

//     console.log("F");

// }
// else if (Nota >= 50 && Nota <60){
//     console.log("E");
    
// }
// else if (Nota >= 60 && Nota <70){
//     console.log("D");
    
// }
// else if (Nota >= 70 && Nota <80){
//     console.log("D");
    
// }
// else if (Nota >= 80 && Nota <90){
//     console.log("C");
    
// }
// else if (Nota >= 90 && Nota <100){
//     console.log("B");
    
// }
// else if (Nota >=100){
//     console.log("A");

// }

// else  {
//     console.log("Nota inválida");

// }


// let n1 =1;
// let n2 = 3;
// let n3 =2;

// a = n1%2;
// b = n2%2;
// c = n3%2;

// if (a===0 || b===0 || c===0){
//     console.log("True");
// }else{
//     console.log("false");
// }
// const valorCusto = 100;
// const valorVenda = 130;



//  let valorCustoTotal = 1.20*(valorCusto);
// let lucro = valorVenda - valorCustoTotal ;


// lucroTotalDeVendas= 1000*(lucro);


// console.log("A quantidade de lucro pela venda de 1000 unidades será : " + lucroTotalDeVendas);



// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let SalarioBruto=3500.00;
let aliquotaINSS;
let aliquotaIRRF;

if (SalarioBruto<=1556.94)
{
    aliquotaINSS=0.08;
    
   
    
}else if (SalarioBruto<=2594.93 && SalarioBruto>1556.94)
{
    aliquotaINSS=0.09;
    
    

}else if (SalarioBruto<=5189.82 && SalarioBruto>2594.93)
{
    aliquotaINSS=0.09;
    

}else if (SalarioBruto>5189.82){

    aliquotaINSS=570.88/SalarioBruto;
    

}
else if (SalarioBruto <=0){
    console.log("Renda inexistente ou inválida");
    
}

let SalarioBase = SalarioBruto - aliquotaINSS*SalarioBruto;

if (SalarioBase<=1903)
{
    aliquotaIRRF=0;
    DeducaoImposto=0;
    
   
    
}else if (SalarioBase<=2826.65 && SalarioBase>1903.98)
{
    aliquota=0.075;
    DeducaoImposto=142.80;
    
    

}else if (SalarioBase<=3751.05 && SalarioBase>2826.65)
{
    aliquotaIRRF=0.15;
    DeducaoImposto=354.80;
    

}else if (SalarioBase<=4664.68 &&  SalarioBase >3751.05){

    aliquotaIRRF=0.225;
    DeducaoImposto=636.13;


}else if (SalarioBase<=4664.68 ){
    aliquotaIRRF=0.275;
    DeducaoImposto=869.36;


}
else if (SalarioBase <=0){
    console.log("Renda inexistente ou inválida");
}

let SalarioLiquido = SalarioBase -(SalarioBase*aliquotaIRRF - DeducaoImposto);
console.log("Seu salario liquido será de : " + SalarioLiquido);









