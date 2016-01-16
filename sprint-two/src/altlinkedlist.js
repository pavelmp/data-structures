var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value); //{value:4, next: {}}}
    if(list.head === null){
      list.head = newNode;//nextNode; // list.head = 0;
      list.tail = newNode;
    } else if (list.head.next === list.tail) {
      list.tail.next = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNew;
      list.tail = newTail;
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

  list.insert = function (val, insertAfterVal) {
    console.log(list);

    var toInsert = Node(val);
    for (var key in list) {
     if(list[key].value === insertAfterVal) {
      toInsert.next = list[key].next;
      list[key] = toInsert;
      break;
     }
    }

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
{{value: 6, next: other object}, {value:7, next: null}}

*?

/*
 * Complexity: What is the time complexity of the above functions?
  addTail: O(1)
  RemoveHead: O(1)
  Contains: O(n)
 */







