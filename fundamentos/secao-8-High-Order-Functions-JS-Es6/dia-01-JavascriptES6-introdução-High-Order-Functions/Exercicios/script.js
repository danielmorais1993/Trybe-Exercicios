const wakeUp = (action) => {
  return'Acordando!!';
}
const coffee = (action) => {
  return 'Bora tomar café!!';
}
const sleep = (action) => {
  return 'Partiu Dormir!!';
}
doingThings = (func) => func()


console.log(doingThings(coffee));