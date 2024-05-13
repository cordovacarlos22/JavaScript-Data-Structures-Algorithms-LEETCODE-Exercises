// CREATE NODE CLASS HERE //
//                        //
//                        //
//                        //
//                        //
////////////////////////////
class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
};




class LinkedList {

  // YOUR  LL constructo HERE//
  //                        //
  //                        //
  //                        //
  //                        //
  ////////////////////////////
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }



  push(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      console.log('created new node false ')
      this.head = newNode
      this.tail = newNode
    } else {
      console.log('added new node true ')
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  printThisHead() {
    let head = this.head
    console.log(head)
  }




  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    let heads;
    // console.log('head from head',Boolean(heads))
    if (!this.head) {
      let heads = !this.head
      console.log('head from head false', Boolean(heads))
      console.log("Head: null or does not exicits yet");
    } else {
      let heads = this.head
      console.log("Head: " + this.head.value);
      console.log('head from head true', Boolean(heads))
    }
  }

  getTail() {
    if (this.head === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

}



let myLinkedList = new LinkedList();
myLinkedList.push(4);



// myLinkedList.getHead();
// myLinkedList.getTail();
// myLinkedList.getLength();
// console.log("\nLinked List:");
// myLinkedList.printList();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/
