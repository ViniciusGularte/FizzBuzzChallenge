
/*
Escreva uma lib que receba um número e:

    Se o número for divisível por 3, no lugar do número escreva 'Fizz'
    Se o número for divisível por 5, no lugar do número escreva 'Buzz'
    Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz'
    Se não for múltiplo de nada, retorna o número

*/
const chai = require('chai');
const fizzbuzz = require('../app/fizzbuzz');
var expect = chai.expect;

describe('FizzBuzz', () => {

  it('Teste: Se numero é divisivel por 3 retornar Fizz', () => {
      expect(fizzbuzz.FizzBuzz(6)).to.be.equal(`Fizz`);
      expect(fizzbuzz.FizzBuzz(6)).to.be.equal(`Fizz`);
  });
  it('Teste: Se numero é divisivel por 5 retornar Buzz', () => {
    expect(fizzbuzz.FizzBuzz(10)).to.be.equal(`Buzz`);
    expect(fizzbuzz.FizzBuzz(25)).to.be.equal(`Buzz`);
  });
  it('Teste: Se numero é divisivel por 3 e 5 retornar FizzBuzz', () => {
    expect(fizzbuzz.FizzBuzz(30)).to.be.equal(`FizzBuzz`);
    expect(fizzbuzz.FizzBuzz(60)).to.be.equal(`FizzBuzz`);
  });
  it('Teste: Se numero não é divisivel por 3 e 5 retornar numero', () => {
    expect(fizzbuzz.FizzBuzz(7)).to.be.equal(7);
    expect(fizzbuzz.FizzBuzz(14)).to.be.equal(14);


  });
});
