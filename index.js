class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(Head = null) {
        this.Head = Head;
    }
add(newNode) {
    let node = this.Head;
    if(node==null) {
        this.Head = newNode;
        return;
    }
    while (node.next) {
        node = node.next;
    }
    node.next = newNode;
}

is_present(val) {
    let current = this.Head;
    while(current) {
        if (current.data == val ) {
            return true;
        }
        current = current.next;
    }
    return false;
}

displayList() {
    let node = this.Head;
    var str = ""
    while(node) {
        str += node.data + "->";
        node = node.next;
    }
    str += "NULL"
    console.log(str);
}

}