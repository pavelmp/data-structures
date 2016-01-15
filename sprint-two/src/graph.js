/* myGraph {0: {value: someVal, edges: [3,5]}, 
			3: {value: someVal, edges: [5,0]}, 
			5: {value: someVal, edges: [3,0]}}
*/ 


// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.numNodes = 0;

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];
  this[this.numNodes] = newNode;
  this.numNodes++;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	for(var key in this){
		if(this[key].value === node){
			return true;
		}
	}
	return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	var nodeWithValue = null;
	for(var key in this){
		if(this[key].value === node){
			nodeWithValue = key;
			
		}
	}
	
	for(var key in this){
		// check if it;s an object	
		var indexOfRemovedEdge = this[key].edges.indexOf(nodeWithValue);
		if(indexOfRemovedEdge !== -1){
			this[key].edges.splice(indexOfRemovedEdge,1);
		}
	}	
	delete this[nodeWithValue];
};

// {0: {value: 2, edges: []}}
// {};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


