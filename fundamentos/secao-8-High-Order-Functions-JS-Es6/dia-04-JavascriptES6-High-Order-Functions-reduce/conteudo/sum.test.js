const {sum , getBigger, onlyEvens ,bestSubjects}  = require('./sum');




describe('The sum of ',()=>{
  it('is function',()=>{
    expect(typeof sum).toBe('function');
  })
  it('sum of',()=>{
    expect( sum([2,3,4])).toBe(9);
    expect( sum([3,4,5])).toBe(12);
  })
  it('bigger number ',()=>{
    expect( getBigger([50,85,-30,3,15])).toBe(85);
  })
  it('Sum of Evens ',()=>{
    expect( onlyEvens([18, 19, 23, 53, 4, 5, 76, 23, 54])).toBe(152);
  })
  it('Show which was the best subject  ',()=>{
    const estudantes = [
      {
        nome: 'Jorge',
        sobrenome: 'Silva',
        idade: 14,
        turno: 'Manhã',
        materias: [
          { name: 'Matemática', nota: 67 },
          { name: 'Português', nota: 79 },
          { name: 'Química', nota: 70 },
          { name: 'Biologia', nota: 65 },
        ],
      },
      {
        nome: 'Mario',
        sobrenome: 'Ferreira',
        idade: 15,
        turno: 'Tarde',
        materias: [
          { name: 'Matemática', nota: 59 },
          { name: 'Português', nota: 80 },
          { name: 'Química', nota: 78 },
          { name: 'Biologia', nota: 92 },
        ],
      },
      {
        nome: 'Jorge',
        sobrenome: 'Santos',
        idade: 15,
        turno: 'Manhã',
        materias: [
          { name: 'Matemática', nota: 76 },
          { name: 'Português', nota: 90 },
          { name: 'Química', nota: 70 },
          { name: 'Biologia', nota: 80 },
        ],
      },
      {
        nome: 'Maria',
        sobrenome: 'Silveira',
        idade: 14,
        turno: 'Manhã',
        materias: [
          { name: 'Matemática', nota: 91 },
          { name: 'Português', nota: 85 },
          { name: 'Química', nota: 92 },
          { name: 'Biologia', nota: 90 },
        ],
      },
      {
        nome: 'Natalia',
        sobrenome: 'Castro',
        idade: 14,
        turno: 'Manhã',
        materias: [
          { name: 'Matemática', nota: 70 },
          { name: 'Português', nota: 70 },
          { name: 'Química', nota: 60 },
          { name: 'Biologia', nota: 50 },
        ],
      },
      {
        nome: 'Wilson',
        sobrenome: 'Martins',
        idade: 14,
        turno: 'Manhã',
        materias: [
          { name: 'Matemática', nota: 80 },
          { name: 'Português', nota: 82 },
          { name: 'Química', nota: 79 },
          { name: 'Biologia', nota: 75 },
        ],
      },
    ];
    
    expect( bestSubjects(estudantes)).toEqual([
      { name: 'Jorge', materia: 'Português' },
      { name: 'Mario', materia: 'Biologia' },
      { name: 'Jorge', materia: 'Português' },
      { name: 'Maria', materia: 'Química' },
      { name: 'Natalia', materia: 'Português' },
      { name: 'Wilson', materia: 'Português' },
    ]); 
  })
})