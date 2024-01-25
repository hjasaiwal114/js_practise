class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(Head = null) {
        this.Head = Head
    }
add(newNode) {
    let node = this.Head;
    if(node == null) {
        this.Head = newNode;
        return;
    }
    while(node.next) {
        node = node.next;
    }
    node.next = newNode;
}
insertAt(index, newNode) {
    let node = this.Head;
    if(index==0) {
        newNode.next = node;
        this.head = newNode;
        return;
    }
    while(--index) {
        if (node.next !== null)
            node = node.next;
        else
            throw Error("Index u=Out of Bound");
    }
    let tempVal = node.next;
    node.next  = newNode;
    newNode.next = tempVal;
}

displayList() {
    let node = this.Head;
    var str = ""
    while (node) {
        str += node.data + "->";
        node = node.next;
    }
    str += "Null"
}

}
numList.add(new Node(12));
numList.add(new Node(13));
numList.add(new Node(14));
numList.add(new Node(15));
numList.displayList();
console.log("Insert 4 at index position 1:")
numList.insertAt(1, new Node(4));
numList.displayList();
console.log("Insert 5 at index position 3:")
numList.insertAt(3, new Node(5));
numList.displayList();
console.log("Insert 6 at index position 6:")
numList.insertAt(6, new Node(6));
numList.displayList();