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
		} else if (this.left === null && this.right === null) {
				return false;
		} else {
// we were here - finishing contains. check if left / right is null
// if one isn't, return recursive call on that branch
				if ()
				return this.left.contains(value)

			}
		}
	};

	tree.depthFirstLog = function (callback) {

	};

	return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
