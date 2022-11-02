
const {flatten} = require('./exercicio1')



describe(('Transformar a matriz em um array'),()=>{
  it('matriz esperada',()=>{
    const arrays = [
      ['1', '2', '3'],
      [true],
      [4, 5, 6],
    ];
    expect(flatten(arrays)).toEqual(['1','2','3',true,4,5,6])

  })
})