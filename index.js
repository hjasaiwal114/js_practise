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
add(newHead) {
    let node  = this.Head;
    if (node==null) {
        this.Head = newNode;
        return;
    }
    while (node.next) {
        node = node.next;
    }
    node.next  = newNode;
}
removeAt(index_pos) {
    let nodes = this.Head;
    if(index_pos===0) {
        if (node!==null) 
        {
            nodes = nodes.next;
            this.Head = nodes;
        }
        else 
            throw Error("Index Out of Bound");
        return;
    }
    while (--index_pos) {
        if (nodes.next !== null)
            nodes = nodes.next;
        else
            throw Error("Index out of bound");
    }
    nodes.next = nodes.next.next;
}
}