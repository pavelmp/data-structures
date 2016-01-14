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
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
var tree = {value: value, children: [{value: childValue, children: [{},{}]},{},{}]}

tree.children[0].children[1]




*/