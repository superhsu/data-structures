var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
   
  this.storage = {}; 
  this.count = 0; 
  this.dequePos = 0; 
  this.enquePos = 0; 

  
};

var queueMethods = {};

Queue.prototype.enqueue = function(value) {
  this.storage[this.enquePos] = value; 
  this.count++;
  this.enquePos++;
};

Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    var temp = this.storage[this.dequePos];
    delete this.storage[this.dequePos];
    this.count--; 
    this.dequePos++; 
    return temp;
  }
};

Queue.prototype.size = function() {
  return this.count;
};
