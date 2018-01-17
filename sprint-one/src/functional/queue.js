var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {}; 
  var count = 0; 
  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
  };

  someInstance.dequeue = function() {
    if (count === 0) { count = 0; } else { 
      count -= 1; 
    }
  };

  someInstance.size = function() {
    return count; 
  };

  return someInstance;
};
