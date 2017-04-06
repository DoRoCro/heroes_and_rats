var Hero = require("../hero.js");
var Task = require("../task.js");
var Food = require("../food.js");

var assert = require("assert");

describe("Hero", function(){

  var hero;
  var task1;
  var food1;

  beforeEach(function(){
    hero = new Hero("Conan", 100, "Horse")
    task1 = new Task("Save the Princess", 10, 1, 100)
    task2 = new Task("kill the baddies", 7, 6, 20)
    task3 = new Task("Do the dishes", 1, 10, 0)
    food1 = new Food("Mars Bar", 2 )
    food2 = new Food("Horse", 4)
  });

  it("Hero has name", function(){
    // console.log(hero)
    assert.strictEqual("Conan", hero.name);

  });

  it("Hero can talk", function(){
    assert.strictEqual("My name is Conan", hero.talk())
  })

  it("Hero can add tasks", function(){
    hero.addtask(task1);
    assert.strictEqual(1, hero.tasks.length)
  })
  
  it("Hero can eat food", function(){
    hero.eat(food1);
    assert.strictEqual(102, hero.health)
  })

  it("Hero likes his fav food", function(){
    hero.eat(food2)
    assert.strictEqual(106, hero.health)
  })

  it("Hero can sort tasks by reward", function(){
    hero.addtask(task2);
    hero.addtask(task1);
    hero.addtask(task3);
    hero.sortTasks(reward)
    assert.strictEqual( 100, hero.tasks[0].reward)
  })




});


