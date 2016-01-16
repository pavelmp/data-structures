

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // initialize kv pair count var
};

HashTable.prototype.insert = function(k, v) {
  // increment kv pair count var
  // if kv pair count/limit ratio > 75%
    // call resize(2)
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
  // decrement kv pair count var
  // if kv pair count/limit ratio < 25%
    // call resize (.5)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  for(var x=0;x<arr.length;x++){
    if(arr[x][0] === k){
      arr.splice(x,1);
    }
  }
  this._storage.set(index,arr);  
};

HashTable.prototype.resize = function (multiplier) {
  
  // reset limit to limit * mutliplier
  // Declare new limited array of limit
  // traverse storage array by index
    // at each index in storage, traverse bucket
      // for each k,v pair, call hash function with kv pair and limit
      // then set kv pair at new storage index
// reassign storage to new limited array


};


/*
 * Complexity: What is the time complexity of the above functions?
 Insert: O(1)
 Retrieve: O(1)
 Remove: O(1)
 */


