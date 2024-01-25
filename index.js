class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedLidt {
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

        this.length ++;
    }

    size() {
        return this.length;
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
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(8));
console.log("Original Doubly Linked Lists:")
numList.printList();
let linkedlist_size = numList.size();
console.log("Size of the said Doubly Linked lists: "+linkedlist_size);
