var Stack = function(count) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {}; 
  newStack.count = 0; 
  newStack.storage = {}; 

  extend(newStack, stackMethods);
  return newStack; 
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++; 
};

stackMethods.pop = function() {
  if (this.count > 0) {
    this.count--; 
    var temp = this.storage[this.count];
    delete this.storage[this.count];
    return temp; 
  }
};

stackMethods.size = function() {
  return this.count;
};


