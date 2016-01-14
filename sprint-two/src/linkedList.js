// {value: 12, next :{value: 06, next: {value: 71, next: {value: 26, next: null}}}}
//{ bana: {value: 34, next: list["apple"]}, apple:{value:56, next: list["gar"]}, gar: {value:23,next:null}, head:"bana",tail:"gar"}

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    this.tail.next = newNode;
    this.tail = this.tail.next;

    
    this.tail = newNode;
    if (this.head === null) {
      this.head = newNode;
    } else {

    }
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */







