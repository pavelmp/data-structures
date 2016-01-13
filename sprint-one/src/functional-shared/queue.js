var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.first = 0;
  obj.last = 0;
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
	enqueue: function(value){
		this.storage[this.last] = value;
		this.last++;
	},
	dequeue: function(){
		if(this.last - this.first === 0) {
			return "Can't dequeue from an empty queue";
		}
		var result = this.storage[this.first];
		delete this.storage[this.first];
		this.first++;
		return result;
	},
	size: function(){
		return this.last - this.first;
	}
};