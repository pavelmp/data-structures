// {value: 12, next :{value: 06, next: {value: 71, next: {value: 26, next: null}}}}
//this thing is list:{0: {value: 34, next: 1}, 1:{value:56, next: 2}, 2: {value:23,next:null}, head:0,tail:2}
// list = {head: {value:4,next: null}, tail: {value:4,next: null}};
// list = {head: {value:4,next: null}, tail: {value:5,next: null}}

// oldTail {value: 4, next: null}
// oldTail {value: 4, next: "tail"}

// list = {head: {value: 4, next: "tail"}, tail: {value:5,next: null}}

/*
Step 0: list = {};

Step 1: add node {value: 4, next: null}

list = {head: {value: 4, next: null}, 
        tail: {value: 4, next: null}}

Step 2: add 2nd node {value: 5, next: null}

list = {head: {value: 4, next: "tail"}, 
        tail: {value: 5, next: null}}

Step 3: add 3rd node {value: 6, next: null}

list = {head: {value: 4, next: "tail"}, 
        tail: {value: 5, next: null}}

var oldTail =  {value: 5, next: null}     

list = {head: {value: 4, next: "tail"}, 
        tail: {value: 6, next: null}} 

var oldTail =  {value: 5, next: null} change next to "tail"
var oldTail =  {value: 5, next: "tail"} 

list[nextNode] = oldTail

list = {head: {value: 4, next: "tail"}, 
        tail: {value: 6, next: null}, 
        0: {value: 5, next: "tail"}} 


list.head.next = nextNode;

list = {head: {value: 4, next: 0}, 
        tail: {value: 6, next: null}, 
        0: {value: 5, next: "tail"}} 


Remove Head:

oldHeadVal = list.head.value   (which is 4)
newHead = list [0]   (which is {value: 5, next: "tail"})
list.head = newHead ( that's {value: 5, next: "tail"})

list = {head: {value: 5, next: "tail"}, 
        tail: {value: 6, next: null}, 
        0: {value: 5, next: "tail"}} 

*/

// list = {head: {value: 4, next: "tail"}, tail: {value:5,next: null}}


var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var nextNode = 0;
  var length = 0;

  list.addToTail = function(value) {
    var newNode = Node(value); //{value:4, next: null}
    if(length === 0){
      list.head = newNode;//nextNode; // list.head = 0;
      list.tail = newNode;
      length++;
    } else if (length === 1) {
        var oldTail = list.tail; // //{value:4, next: null}
        list.tail = newNode;// {value:5, next: null}
        oldTail.next = "tail";
        list.head = oldTail;
        length++;
    } else {
      // normal
      var oldTail = list.tail;
      list.tail = newNode;
      oldTail.next = "tail";
      list[nextNode] = oldTail;
      list.head.next = nextNode;
      nextNode++;
      length++;
    }
  };

  list.removeHead = function() {
    if(list.head === null) {
      return "can't whatever empty LL";
    } else if (length === 1){
        var oldHeadVal = list.head.value;
        list.head = null;
        list.tail = null;
        length--;
        return oldHeadVal;
    } else {
        var oldHeadVal = list.head.value;
        var oldHeadNext = list.head.next;
        var newHead = list[oldHeadNext]; // 1
       list.head = newHead; //0
       delete list[oldHeadNext];
       length--;
       return oldHeadVal;
    }

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







