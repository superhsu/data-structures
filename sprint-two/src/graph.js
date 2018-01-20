

// Instantiate a new graph
var Graph = function() {
	this.graph = {}; 
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.graph[node] = {}; 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	return this.graph.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	delete this.graph[node]; 
	for (var parentNode in this.graph) {
		var links = this.graph[parentNode];
		for (var childNodes in links) {
			if (childNodes === JSON.stringify(node)) {
              delete this.graph[parentNode][childNodes];
			}
		}
	}	
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	return this.graph[fromNode].hasOwnProperty(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.graph[fromNode][toNode] = fromNode; 
	this.graph[toNode][fromNode] = toNode; 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	delete this.graph[fromNode][toNode];
	delete this.graph[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for (var node in this.graph) {
		cb(node); 
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode: O(1)
 contains: 0(1)
 hasEdge: 0(1)
 addEdge: 0(1)
 removeEdge: 0(1)
 removeNode: O(n^2)
 forEachNode: 0(n)

 */


