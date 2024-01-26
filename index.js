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
update_Node(index, newValue) {
    if (index < 0 || index > this.length) {
        return false;
    }
    let currentNode = this.head;
    for (let i = 0; i< index; i++) {
        currentNode=  currentNode.next;
    }
    currentNode.value = newValue;
    return true;
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
console.log("Update Node value: Index = 2, Value = 33");
numList.update_Node(2,33);
numList.printList();
console.log("Update Node value: Index = 6, Value = 88");
numList.update_Node(6,88);
numList.printList();
console.log("Update Node value: Index = 1, Value = 55");
numList.update_Node(1,55);
numList.printList();