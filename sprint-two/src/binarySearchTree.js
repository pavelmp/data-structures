var BinarySearchTree = function(value) {
	var tree = {};
	tree.value = value;
	tree.left = null;
	tree.right = null;

	tree.insert = function (value) {
		 if (value < this.value) { 
		 	if (this.left === null) {
		 		this.left = BinarySearchTree(value);
		 	} else {
		 		this.left.insert(value);
		 	}
		 } else if (value > this.value) {
		 	if (this.right === null) {
		 		this.right = BinarySearchTree(value);
		 	} else {
		 		this.right.insert(value);
		 	}
		 } else {
		 	return "already in tree, dummy";
		 }		
	};

	tree.contains = function (value) {
		if (this.value === value) {
			return true;
		} else if (this.value > value) {
			return this.left ? this.left.contains(value) : false;
		} else {
			return this.right ? this.right.contains(value) : false;
		} 
	};

	tree.depthFirstLog = function (callback) {
		callback(this.value);
		if (this.left !== null) {
			this.left.depthFirstLog(callback);
		}
		if (this.right !== null) {
			this.right.depthFirstLog(callback);
		}
	};

/*
	levels = [5];
	levels[1] = [5];

*/


	tree.breadthFirstLog = function (callback) {
	  var levels = [];

	  function recursiveLog (node, level) {
	  	levels[level] = levels[level] || [];
	  	levels[level].push(node.value);
	  	if (node.left !== null) {
			recursiveLog(node.left, level+ 1);
		  }
		if (node.right !== null) {
			recursiveLog(node.right, level + 1);
		  }
	  }
	  recursiveLog(this, 0);
	  console.log(levels);
	  levels = _.flatten(levels);
	  for(var x=0; x<levels.length; x++) {
	  	callback(levels[x]);	
	  }
	};

	return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 Insert: O(log(n))
 Contains: O(log(n))
 DepthFirstLog: O(n)
 */














