const { add } = require("../src/index");
require("mocha");
const { expect } = require("chai");

describe("add", ()=>{
  it("should return 1 + 1 === 2", ()=>{
   expect(add(1,1)).to.equal(2); 
  });
});