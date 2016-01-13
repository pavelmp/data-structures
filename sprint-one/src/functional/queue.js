var Queue = function() {
  var someInstance = {};
  var first = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function() {
    if((last - first) === 0) {
      return "queue is empty";
    }
    var result = storage[first];
    delete storage[first];
    first++;
    return result;
  };

  someInstance.size = function() {
    return last - first;
  };

  return someInstance;
};
