const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);
    let currentNode;
    if(this.head == null) {
      this.head = node;
    }else {
      currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      current.next = node;
    }
    this.size++;
  }


  // In order to add an element at the given index of the list we consider three conditions as follows:
  // - if the index is zero we add an element at the front of the list and make it head
  // - if the index is the last position of the list we append the element at the end of the list
  // - if the index is between 0 or size -1 we iterate over to the index and add an element at that index

  insertAt(element, index) {
    if(index < 0 || index > this.size) {
      return console.log("Invalid index!");
    }else {
      // creates a new node
      let node = new Node(element);
      let currentNode, previousNode;
      currentNode = this.head;

      // add the element to the first index
      if(index == 0) {
        node.next = this.head;
        this.head = node;
      }else {
        currentNode = this.head;
        let it = 0;

        // iterate over the list to find the position to insert
        while(it < index) {
          it++
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        // adding an element
        node.next = currentNode;
        previousNode.next = node;
      }
      this.size++;
    }
  }
}

module.exports = LinkedList;
