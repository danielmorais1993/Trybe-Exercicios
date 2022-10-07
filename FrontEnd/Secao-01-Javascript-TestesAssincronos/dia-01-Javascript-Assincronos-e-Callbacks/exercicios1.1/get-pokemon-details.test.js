

const { getPokemonDetails,handlePokemonSearch } = require('./get-pokemon-details');



getPokemonDetails('Squirtle', handlePokemonSearch);

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', done => {
    getPokemonDetails('Gyarados', handlePokemonSearch =>{
      expect(()=>handlePokemonSearch(new Error('Não temos esse pokémon para você :('), null)).toThrow('Não temos esse pokémon para você :(');
      done();
    })
  });

  it('retorna um pokémon que existe no banco de dados', done => {
    getPokemonDetails('Squirtle', handlePokemonSearch =>{
      expect(handlePokemonSearch(error,'Olá, seu pokémon é o Squirtle, o tipo dele é Água e a habilidade principal dele é Jato de Água')).toBe('Olá, seu pokémon é o Squirtle, o tipo dele é Água e a habilidade principal dele é Jato de Água');
      done();
    })
    
  });
});