var doublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value); //{value:4, next: {}}}
    if(this.head === null){
      this.head = newNode;//nextNode; // list.head = 0;
      this.tail = newNode;
    } else {
      if(this.head.next === null){
        this.head.next = newNode;
      }
      newNode.previous = list.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } 
  };

  list.addToHead = function(value) {
    var newNode = Node(value); //{value:4, next: null,previous: null}}
    if(this.head === null){
      this.addToTail(value);
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    } 
  };

  list.removeHead = function() {
    if(this.head === null) {
      return "can't whatever empty LL"; //{{value:4,next: null, previous: null}}
    } 
    var oldHead = this.head.value;
    if(this.head.next !== null){
      this.head.next.previous = null;
    }
    this.head = this.head.next;
    return oldHead;
  };

  list.removeTail = function() {
    if(this.tail === null) {
      return "can't whatever empty LL";
    } 
    var oldTailValue = this.tail.value;
    this.tail.previous.next = null;
    this.tail = this.tail.previous;
    return oldTailValue;
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
  node.previous = null;
  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
  addTail: O(1)
  RemoveHead: O(1)
  Contains: O(n)
 */







