var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value); //{value:4, next: {}}}
    if(this.head === null){
      list.head = newNode;//nextNode; // list.head = 0;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    } 
  };

  list.removeHead = function() {
    if(list.head === null) {
      return "can't whatever empty LL";
    } 
    var oldHead = this.head.value;
    this.head = this.head.next;
    return oldHead;
  };

  list.contains = function(target) {
    var node = this.head;
    
    while (node) {
      if (node.value === target){
        return true;
      } 
      node = node.next;
    } 

    return false;      
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
  addTail: O(1)
  RemoveHead: O(1)
  Contains: O(n)
 */







