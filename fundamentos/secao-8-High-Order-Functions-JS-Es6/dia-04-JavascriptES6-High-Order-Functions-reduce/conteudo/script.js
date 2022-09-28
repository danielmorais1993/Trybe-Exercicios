const numbers = [1,2,3,4,5,6,7,8,9]

const iteracoes = numbers.reduce((acc,curr)=> {
  console.log(`O valor atual é ${curr}`)
  console.log(`O valor acumulado é ${acc}`)
  return acc + curr},1);

const sum = (array) => {

};