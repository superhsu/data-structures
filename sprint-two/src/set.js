var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; 
  return set ; 
};

var setPrototype = {};

setPrototype.add = function(item) {
  var bag = this._storage;
  if (bag.indexOf(item) === -1) {
  	bag.push(item);
  }
};

setPrototype.contains = function(item) {
 var bag = this._storage;
 if (bag.indexOf(item) > -1) {
 	return true;
 } else {
 	return false; 
 }
};

setPrototype.remove = function(item) {
	var bag = this._storage; 
	for(var i = 0; i < bag.length; i++) {
		if (bag[i] === item) {
			delete bag[i];
		}
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 add 0(n)
 contains 0(n)
 remove 0(n()

 */
