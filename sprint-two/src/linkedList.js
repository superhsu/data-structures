var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;

  list.addToTail = function(value) {
  var newNode = Node(value); 
    if (list.tail === null) {
      list.head = newNode;
      list.tail = newNode; 
    } else {
      list.tail.next = newNode;
      list.tail = newNode; 
    }
    list.size++; 
  };

  list.removeHead = function() {
    var remove = list.head.value;
    list.head = list.head.next;
    list.size--;
    return remove; 
  };

  list.contains = function(target) {
    var search = list.head; 
    while (search !== null) {
      if (search.value === target) {
        return true; 
      }
      search = search.next;
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
 add o(1)
 remove o(1)
 contains o(n) 
 */
