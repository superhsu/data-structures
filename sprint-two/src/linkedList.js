var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {

    var newNode = Node(value);
    
    //check if list is empty, if it is, head = new node
    if (list.tail === null) {
      list.head = newNode;
    } else { //if list isn't empty, set current tail.next to new node
      list.tail.next = newNode;
    }
    list.tail = newNode; //
    list.length++; //add to size b/c we are adding a new node to list
  };

  list.removeHead = function() {
    var formerHead = list.head.value;
    list.head = list.head.next;
    list.length--;
    return formerHead;
  };

  list.contains = function(target) {
    // var search = list.head;
    // while(search !== null) {
    //   if (search.value === target) {
    //     return true;
    //   } else {
    //     search = search.next;
    //   }
    // }
    // return false;
    var current = list.head;
    while(current !== null) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
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
    removeHead - 
 */
