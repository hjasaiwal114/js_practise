class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}
class SinglyLinkedList {
    constructor(Head = null) {
        this.Head = Head
    }
add(newNode) {
    let node = this.Head;
    if (node==null) {
        this.Head = newNode;
        return;
    }
    while (node.next) {
        node = node.next;
    }
    node.next = newNode;
}
to_string() {
    let current = this.Head;
    let str = "";
    while (current) {
        str += current.data + " ";
        current = current.next;
    }
    return str;
}
displayList() {
    let node =  this.Head;
    var str = ""
    while (node) {
        str += node.data + "->";
        node = node.next;
    }
    str += "NULL"
    console.log(str);
}
}
let numList = new SinglyLinkedList();
numList.add(new Node(12));
numList.add(new Node(13));
numList.add(new Node(14));
numList.add(new Node(15));
numList.add(new Node(14));
console.log("Singly Linked list:")
numList.displayList();
console.log("Converts the said Singly Linked Lists into a string:");
result = numList.to_string();
console.log(result);
let numList1 = new SinglyLinkedList();
console.log("New Singly Linked list:")
numList1.displayList();
console.log("Converts the said Singly Linked Lists into a string:");
result = numList1.to_string();
console.log(result);