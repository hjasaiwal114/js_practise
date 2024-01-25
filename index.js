add(newNode) {
    let node  = this.Headers;
    if (node == null) {
        this.Head = newNode;
        return;
    }
    while (node.next) {
        node - node.next;
    }
    node.next  = newNode;
}

index_of(el) {
    let index = 0;
    let node  = this.Head;
    while (node) {
        if (node.data === el) {
            return index;
        }
        node = node.next;
        index ++;
    }
    return -1;
}