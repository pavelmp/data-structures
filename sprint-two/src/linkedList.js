// {value: 12, next :{value: 06, next: {value: 71, next: {value: 26, next: null}}}}
//this thing is list:{0: {value: 34, next: 1}, 1:{value:56, next: 2}, 2: {value:23,next:null}, head:0,tail:2}
// list = {head: {value:4,next: null}, tail: {value:4,next: null}};
// list = {head: {value:4,next: null}, tail: {value:5,next: null}}

// oldTail {value: 4, next: null}
// oldTail {value: 4, next: "tail"}

// list = {head: {value: 4, next: "tail"}, tail: {value:5,next: null}}


var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var nextNode = 0;


  list.addToTail = function(value) {
    var newNode = Node(value); //{value:4, next: null}
    if(list.head === null){
      list.head = newNode;//nextNode; // list.head = 0;
      list.tail = newNode;
    } else {
        var oldTail = list.tail; // //{value:4, next: null}
        list.tail = newNode;// {value:5, next: null}
        oldTail.next = "tail";
        list.head = oldTail;
    }


    


   // list[nextNode] = newNode; //list[0] = {value:4, next: null};
    
    

   // nextNode++; // nextNode = 1
  };

  list.removeHead = function() {
    if(list.head === null) {
      return "can't whatever empty LL";
    }
    var oldHead = list[list.head].value;
    var newHeadIndex = list[list.head].next; // 1
    delete list[list.head]; //0
    list.head = newHeadIndex;
    return oldHead;
  };

  list.contains = function(target) {
    for(var key in list){
      if(list[key].value === target){
        return true;
      }
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
 */







