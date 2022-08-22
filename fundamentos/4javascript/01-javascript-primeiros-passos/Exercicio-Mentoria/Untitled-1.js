let ageMarina = 15;
let ageSilvia = 400;
let ageIza = 100;



if ( ageMarina>ageSilvia && ageSilvia > ageIza ){

    console.log("Iza é a que tem menor idade e possui " + ageIza + "anos" );

    
}
else if (ageSilvia>ageMarina && ageIza>ageMarina){
    console.log("Marina é a que tem menor idade e possui " + ageMarina + "anos" );
}

else if (ageIza>ageMarina && ageMarina>ageSilvia){
    console.log("Silvia é a que tem menor idade e possui " + ageSilvia + "anos" );
}

else if(ageIza===ageMarina){
    if(ageIza===ageSilvia)
    console.log("Silvia,Iza,Marina são as que têm menor idade e possuem " + ageSilvia + "anos" );
    if (ageIza<ageSilvia)
    console.log(",Iza,Marina são as que têm menor idade e possuem " + ageIza+ "anos" );
    




}
else if (ageSilvia ===ageMarina){
    if (ageIza>ageMarina)
    console.log("Silvia,Marina são as que têm menor idade e possuem " + ageSilvia+ "anos" );
    if (ageIza<ageMarina)
    console.log("Iza é a que tem menor idade e possuem " + ageIza+ "anos" );
}

else {

console.log("Ínvalid age");

}






