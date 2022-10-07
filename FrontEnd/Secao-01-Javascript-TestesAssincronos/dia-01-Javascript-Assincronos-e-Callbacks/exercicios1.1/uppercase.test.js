function vet(element) {
  return element
}

const uppercase = (str, callback) => {
  setTimeout(() => {
   const result = str.toUpperCase();
    callback(result);
  }, 500);
};


describe('Verificar se retorna uppercase',() =>{
 
  test('uppercase',done=>{
    uppercase('Marcela',vet=>{
      expect(vet).toBe('MARCELA');
      done();
    })
  })
})