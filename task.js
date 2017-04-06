var Task = function(title, difficulty, urgency, reward){
  this.title = title;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.done = false;

}

Task.prototype = {
  talk: function() {
    return "My name is " + this.name
  }
};

module.exports = Task; 
