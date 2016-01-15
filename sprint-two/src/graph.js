/* myGraph {0: {value: someVal, edges: [3,5]}, 
			3: {value: someVal, edges: [5,0]}, 
			5: {value: someVal, edges: [3,0]}}
*/ 


// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.numNodes = 0;
  this.storage = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];
  this.storage[this.numNodes] = newNode;
  this.numNodes++;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	for(var key in this.storage){
		if(this.storage[key].value === node){
			return true;
		}
	}
	return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	var nodeWithValue = null;
	for(var key in this.storage){
		if(this.storage[key].value === node){
			nodeWithValue = key;
			delete this.storage[key];
		}
	}
	
	for(var key in this.storage){
		var indexOfRemovedEdge = this.storage[key].edges.indexOf(nodeWithValue);
		if(indexOfRemovedEdge !== -1){
			this.storage[key].edges.splice(indexOfRemovedEdge,1);
		}
	}	
};


// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	var indexOfFrom = -1;
	var indexOfTo = -1;

	for(var key in this.storage){
		if(this.storage[key].value === fromNode){
			indexOfFrom = key;
		}
		if(this.storage[key].value === toNode){
			indexOfTo = key;
		}
	}		
	if(this.storage[indexOfFrom].edges.indexOf(indexOfTo) < 0){
		return false;	
	}
	return true;
};	

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var indexOfFrom = -1;
	var indexOfTo = -1;
  	for(var key in this.storage){
  	  if(this.storage[key].value === fromNode){
  	  	indexOfFrom = key;
  	  }
  	  if(this.storage[key].value === toNode){
  	  	indexOfTo = key;
  	  }
  	}    	  
  this.storage[indexOfFrom].edges.push(indexOfTo);
  this.storage[indexOfTo].edges.push(indexOfFrom);	
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


