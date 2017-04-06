var Task = require("../task.js");
var assert = require("assert");

describe("Task", function(){

  var task1;

  beforeEach(function(){
    task1 = new Task("Save the Princess", 10, 1, 100)
  });

  it("Task has title", function(){
    assert.strictEqual("Save the Princess", task1.title)
  })
});


