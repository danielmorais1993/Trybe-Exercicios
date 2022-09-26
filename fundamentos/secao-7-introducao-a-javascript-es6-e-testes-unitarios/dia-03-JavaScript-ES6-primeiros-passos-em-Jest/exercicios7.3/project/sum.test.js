// loginValidation.test.js
const 
 sum
 = require("./sum.js");

describe("Test function sum()", () => {
  
  it("Verify if return 9 of the input sum (4,5)", () => {
    expect(sum(4,5)).toEqual(9);
  });
  it("verify if give values equal to zero , the function return zero", () => {
    expect(sum(0,0)).toEqual(0)
  });
  

  it("The function gives an error id the parameters are '5' and 4", () => {
    expect( () => sum(4,"5")).toThrow(Error);
  }); 
  it("The function gives an error and this match must be equal to the error thrown", () => {
    expect( () => sum(4,"5")).toThrow('parameters must be numbers');
  }); 

});