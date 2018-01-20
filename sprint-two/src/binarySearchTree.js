var BinarySearchTree = function(value) {
    var treeNode = Object.create(bstMethods);
	treeNode.value = value;
	treeNode.left = null; 
	treeNode.right = null; 
	treeNode.depth = 0; 
	return treeNode; 
};

var bstMethods = {};

bstMethods.insert = function(value) {
	if (value < this.value) {
		if (this.left === null) {
			this.left = BinarySearchTree(value);
			this.left.depth = this.depth + 1;
		} else {
			this.left.insert(value);
		}
	} else {
		if (this.right === null) {
			this.right = BinarySearchTree(value);
			this.right.depth = this.depth + 1; 
		} else {
			this.right.insert(value); 
		}
	}
};

bstMethods.contains = function(value) {

	if (value === this.value) {
		return true; 
	}
    
   if (value < this.value) {
	if (this.left) {
		return this.left.contains(value);
	} else {
		return false; 
	} 
} else { 
	if (this.right) {
			return this.right.contains(value);
		} else {
			return false; 
		}
	}
};

bstMethods.depthFirstLog = function(cb) {
  cb (this.value);

  if (this.left) {
  	this.left.depthFirstLog(cb);
  }

  if (this.right) {
  	this.right.depthFirstLog(cb);
  }
}; 


/*
 * Complexity: What is the time complexity of the above functions?
 */
