var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree,treeMethods);

  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));	
};

treeMethods.traverse = function(callback) {
  if(this.value) { 
    callback(this.value);
  }
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(callback);
  }
};

treeMethods.contains = function(target) {
   if(this.value === target) {
   	return true;
   } else {
   	var result = false;
   	for (var i =0; i< this.children.length; i++) {
   		if (this.children[i].contains(target)){
   			result = true;
   			break;
   		}
   	}
   	return result;
   }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
var tree = {value: value, children: [{value: childValue, children: [{},{}]},{},{}]}

tree.children[0].children[1]




*/