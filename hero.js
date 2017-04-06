var Hero = function(name, health, favFood){
  this.name = name;
  // console.log(this.name)
  this.health = health;
  this.favFood = favFood;
  this.tasks = [];
  // console.log(this)
}

Hero.prototype = {
  talk: function() {
    return "My name is " + this.name
  },
  addtask: function(task){
    this.tasks.push(task)
  },
  eat: function(food) {
    var mutliplier = 1
    if (food.title === this.favFood) mutliplier = 1.5;
    this.health += food.replenishmentValue * mutliplier
  },
  sortTasks: function(priority){
    this.tasks.sort(function(a, b){
      a.priority - b.priority

    })

  }
};

module.exports = Hero; 

