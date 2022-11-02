// const employee = (name) =>{
//   let new_name = name.split(' ').join('').toLowerCase();
//   let email = `${new_name}@trybe.com`
//   return {
//     name,
//     email
//   }

// }



// const newEmployees  = (func) => {
//   const employees = {
//     id1: func('Pedro Guerra'),
//     id2: func('Luiza Drumond'),
//     id3: func('Carla Paiva'),

//   }
//   return employees;
// }



// console.log(newEmployees(employee))
// let randomNumber = () => {
//   return (Math.floor(5*Math.random()) + 1) 
// }


// let randomCheck = (func,number) => {

//   console.log(func())
//   if (number === func()){
//     return 'Congratulations you won !';

//   }
//   return 'Try again!'


// }

// console.log(randomNumber());


// console.log(randomCheck(randomNumber,5))

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


// const checkCorrect = (writeAnswers,studentAnswers) =>{
//   let point = 0;
//   for (let i=0;i<writeAnswers.length;i++){
//     if (studentAnswers[i] === writeAnswers[i]){
//       point+=1


//     }else if(studentAnswers[i]==='N.A') {
//       point=point;

//     }else{
//       point -= 0.5;
//     }
//   }
//   return point



// }


// const countPoints = (writeAnswers,studentAnswers,func) => {
// console.log(writeAnswers);
// console.log(studentAnswers);


//   return func

// }







// console.log(countPoints(RIGHT_ANSWERS,STUDENT_ANSWERS,checkCorrect(RIGHT_ANSWERS,STUDENT_ANSWERS)));
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
    dragon.damage = Math.round((dragon.strength - 15) * Math.random() + 15)
    return dragon.damage

}
const warriorDamage = () => {
 warrior.damage = Math.round((warrior.strength * warrior.weaponDmg - warrior.strength) * Math.random() + warrior.strength);
  return warrior.damage
}

const mageDamageMana = () => {
  const object = {
    mageDamage: '',
    manaCharged: '',
  }
  object.manaCharged = Math.round((mage.intelligence) * Math.random() + mage.intelligence);
  mage.damage = object.manaCharged;
  if (mage.mana < 15) {
    object.mageDamage = 'Not enought mana'
    return mage.damage = 0;
  
  } else {
    object.manaCharged = (mage.mana - 15);
    return mage.mana = mage.mana -15;
  }
  

}


const gameActions = {
   firstBattle: (callback) => {
    callback()
    return dragon.healthPoints = dragon.healthPoints - warrior.damage;
   },
   secondeBattle: (callback) =>{
    callback();
    return dragon.healthPoints = dragon.healthPoints - mage.damage;
   },
   thirdBattle: (callback) =>{
    callback();
    warrior.healthPoints = warrior.healthPoints - dragon.damage;
   return mage.healthPoints = mage.healthPoints - dragon.damage;

   },

   battleMembers


}


while (dragon.healthPoints>0 && (warrior.healthPoints || mage.healthPoints)){

gameActions.firstBattle(warriorDamage);
gameActions.secondeBattle(mageDamageMana);
gameActions.thirdBattle(dragonDamage);
if (dragon.healthPoints<0){
  console.log('Congratulations! The dragon is dead!')
}else if(warrior.healthPoints < 0 && mage.healthPoints < 0){
console.log('You loose the battle!');
}
console.log(gameActions.battleMembers)

}








