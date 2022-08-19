let age =10;
let sex="M"; 
let weight=100 ;
let height=1.63 ;
let resultado;


switch (sex){
    case ("M"): {

        let resultado=(height*6.25) + (weight*9.99) - (age*4.92) + 5;
        console.log(resultado);
        console.log("A taxa metabólica basal é " + " " + resultado  +"Kcal")

        break;

        
    }


    case("F"):{


        let resultado=(height*6.25) + (weight*9.99) - (age*4.92) - 161;
        console.log(resultado);
        console.log("A taxa metabólica basal é " + " " + resultado  +"Kcal")

        break;


    }
}





