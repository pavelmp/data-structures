

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._indecies = {};
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._indecies.hasOwnProperty(index) && this._indecies[index] !== k) {
	index++;
  }

  this._indecies[index] = k;
  this._storage.set(index,v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  while(this._indecies[index] !== k){
  	index++;
  }
  
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index,undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


