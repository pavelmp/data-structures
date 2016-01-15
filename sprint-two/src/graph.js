/* myGraph {0: {value: someVal, edges: [3,5]}, 
			3: {value: someVal, edges: [5,0]}, 
			5: {value: someVal, edges: [3,0]}}
*/ 


// ------------------------
// Instantiate a new graph
var Graph = function() {
	this.storage = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];
  this.storage[node] = newNode;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	return this.storage.hasOwnProperty(node);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	delete this.storage[node];
	for(var key in this.storage){
		var index = this.storage[key].edges.indexOf(node);
		if(index>0){
			this.storage[key].edges.splice(index,1);
		}
	}
};


// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	return this.storage[fromNode].edges.indexOf(toNode) > -1;
};	

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(this.storage[fromNode].edges.indexOf(toNode) === -1){
  	this.storage[fromNode].edges.push(toNode);
  }
  if(this.storage[toNode].edges.indexOf(fromNode) === -1){
  	this.storage[toNode].edges.push(fromNode);
  }
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	this.storage[fromNode].edges.splice(this.storage[fromNode].edges.indexOf(toNode),1);
	this.storage[toNode].edges.splice(this.storage[toNode].edges.indexOf(fromNode),1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for(var key in this.storage){
		cb(key);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 	addNode: O(1)
 	contains: O(n)
 	removeNode: O(n*n)
 	hasEdge: O(n)
 	addEdge: O(n)
 	removeEdge: O(n*n)
 	forEachNode: O(n)
 */


