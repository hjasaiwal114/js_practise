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
        this.tail  = this.head;
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

    reverse() {
        let current = this.head;
        let temp = null;
        while (current != null) {
            temp = current.previous;
            current.previous = current.next;
            current.next = temp;
            current = current.previous;
        }
        if (temp != null) {
            this.head = temp.previous;
        }
        return this.head;
    }

printList() {
    let current = this.head;
    let result = [];
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.json(' '));
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
console.log("Reverse Linked list:")
numList.reverse();
numList.printList();
