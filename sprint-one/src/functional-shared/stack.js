var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.length = 0;
  _.extend(obj,stackMethods);
  return obj;
};

var stackMethods = {
	push : function(value){
	  this.storage[this.length] = value;	
	  this.length++;			
	},
	pop : function(){
	  if(this.length === 0){
	  	return "Can't pop from an emtpy stack";
	  }
	  this.length--;
	  var result = this.storage[this.length];
	  delete this.storage[this.length];
	  return result;
	},
	size : function(){
	  return this.length;	
	}
};


