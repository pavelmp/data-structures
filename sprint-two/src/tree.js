var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree,treeMethods);

  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));	
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