

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(!Array.isArray(this._storage.get(index))){
    this._storage.set(index,[[k,v]]);
  } else {
    this._storage.set(this._storage.get(index).concat([k,v]));
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for(var x=0, arr = this._storage.get(index); x<arr.length;x++){
    if(arr[x][0] === k){
      return arr[x][1];      
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index,undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


