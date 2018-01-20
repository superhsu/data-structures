var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  // tree node needs a root node


  _.extend(newTree, treeMethods); 
  return newTree;

};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTreeNode = Tree(value);
  this.children.push(newTreeNode);

};

treeMethods.contains = function(target) {
	//use recursion to find property 
  if (this.value === target) {
  	return true; 
  }

  for (var i = 0; i < this.children.length; i++) {
  	var child = this.children[i];
  	if (child.contains(target)) {
  		return true; 
  	}
  }
  return false; 
};



/*
 * Complexity: What is the time complexity of the above functions?
 add O(1)
 contains O(n)
 */
