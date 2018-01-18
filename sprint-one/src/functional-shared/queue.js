var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQue = {}; 
  newQue.storage = {}; 
  newQue.count = 0; 
  newQue.dequePos = 0; 
  newQue.enquePos = 0; 

  _.extend(newQue, queueMethods);
  return newQue; 
};

var queueMethods = {};

queueMethods.push = function() {
  
};


