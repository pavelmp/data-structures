

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(!Array.isArray(this._storage.get(index))){
    this._storage.set(index,[[k,v]]);
  } else {
    var found = false;
    for(var x=0, arr = this._storage.get(index); x<arr.length;x++){
      if(arr[x][0] === k){
        arr[x][1] = v;
        found = true;
      }
    }
    if(!found){
      arr.push([k,v]);
    }
    this._storage.set(index,arr);
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
  var arr = this._storage.get(index);
  for(var x=0;x<arr.length;x++){
    if(arr[x][0] === k){
      arr.splice(x,1);
    }
  }
  this._storage.set(index,arr);
};



/*
 * Complexity: What is the time complexity of the above functions?
 Insert: O(1)
 Retrieve: O(1)
 Remove: O(1)
 */


