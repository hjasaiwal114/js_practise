class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.previous = null;
	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			previous: null
		};
		this.length = 0;
		this.tail = this.head;
	}

  add(newNode) {
    if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
    } 
    else
    {
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  this.length++;
   }
  
is_present(val) {
    let current = this.head;
    while (current) {
    if (current.value === val) {
      return true;
    }
    current = current.next;
  }
  return false;
}

  
 printList() {
		let current = this.head;
		let result = [];
		while (current !== null) {
			result.push(current.value);
			current = current.next;
		}
		console.log(result.join(' '));
		return this;
	}
}

let numList = new DoublyLinkedList();
numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));
console.log("Original Doubly Linked Lists:")
numList.printList();
result = numList.is_present(2);
console.log("Is 2 present in the said link list: "+result);
result = numList.is_present(7);
console.log("Is 7 present in the said link list: "+result);
result = numList.is_present(1);
console.log("Is 1 present in the said link list: "+result);
result = numList.is_present(9);
console.log("Is 9 present in the said link list: "+result);
