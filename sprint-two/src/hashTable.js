var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // initialize kv pair count var
  this._kvCount = 0;
};

HashTable.prototype.insert = function(k, v) {
  // increment kv pair count var
  this._kvCount++;
  // if kv pair count/limit ratio > 75%
  if(this._kvCount/this._limit > 0.75){
    // call resize(2)
    this.resize(2);
  }
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
    //this._storage.set(index,arr);
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
  this._kvCount--;
  // if kv pair count/limit ratio < 25%
  if(this._kvCount/this._limit < 0.25){
    // call resize (.5)
    this.resize(0.5);
  }  
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
  //reset kv pairs:
  this._kvCount = 0;
  // reset limit to limit * mutliplier
  this._limit *= multiplier;
  // shallow copy old storage to a variable
  
  // BRUTE FORCE SOLUTION:  
  // create normal array to hold ALL pairs
  var allPairs = [];
  // traverse storage
  this._storage.each(function (bucket,i,a){
    // if the bucket has any kv pairs
    if(Array.isArray(bucket)){
      // traverse each bucket
      for(var x=0;x<bucket.length;x++){
        //push each k,v pair to temp AllPairs array
        allPairs.push(bucket[x]);
      }
    }
  });
  // reset this.storage to new limited array of new limit
  this._storage = LimitedArray(this._limit);
  //then traverse temp array 
  for(var a = 0; a < allPairs.length; a++) {
    //and populate our new limited array
    this.insert(allPairs[a][0], allPairs[a][1]);
  }  
};


/*
 * Complexity: What is the time complexity of the above functions?
 Insert: O(1)
 Retrieve: O(1)
 Remove: O(1)
 */


