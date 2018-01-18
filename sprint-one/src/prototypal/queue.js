var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQue = Object.create(queueMethods); 
  newQue.storage = {}; 
  newQue.count = 0; 
  newQue.dequePos = 0; 
  newQue.enquePos = 0; 

  return newQue; 
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.enquePos] = value; 
  this.count++;
  this.enquePos++;
};

queueMethods.dequeue = function() {
  if (this.count > 0) {
    var temp = this.storage[this.dequePos];
    delete this.storage[this.dequePos];
    this.count--; 
    this.dequePos++; 
    return temp;
  }
};

queueMethods.size = function() {
  return this.count;
};


