var Food = require("../food.js");
var assert = require("assert");

describe("Food", function(){

  var food1;

  beforeEach(function(){
    food1 = new Food("Cheese", 1)
  });

  it("Food has title", function(){
    assert.strictEqual("Cheese", food1.title)
  })
});


