class Stack {
    constructor() {
      this.items = [];
    }
    
    // Pushes an element onto the stack
    push(element) {
      this.items.push(element);
    }
    
    // Removes the top element from the stack and returns it
    pop() {
      if (this.items.length == 0)
        return "Underflow";
      return this.items.pop();
    }
    
    // Checks if the stack is empty
    isEmpty() {
      return this.items.length == 0;
    }
    
   // Returns the top element of the stack
    peek() {
      if (this.items.length == 0)
        return "No elements in Stack";
      return this.items[this.items.length - 1];
    }
  
   displayStack(stack) {
     console.log("Stack elements are:");
     let str = "";
     for (let i = 0; i < stack.items.length; i++)
       str += stack.items[i] + " ";
     return str.trim();
    }
    
   sort_Stack(stack) {
    let tempStack = new Stack();

    while (!stack.isEmpty) {
        let currentElement = stack.pop();
        while (!tempStack.isEmpty() && tempStack.peek() < currentElement) {
            stack.push(tempStack.pop());
        }
        tempStack.push(currentElement);
    }
    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }
    return stack;
   }   

   removeDuplicates() {
    const uniqueItems = [];
    const seen = new Set();
    for (let i = 0; i< this.items.length; i++) {
        const currentItem = this.items[i];
        if (!seen.has(currentItem)) {
            uniqueItems.push(currentItem);
            seen.add(currentItem);
        }
    }
    this.items = uniqueItems;
   }
   rotateLeft() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        let firsElement = this.items.shift();
        this.items.push(firstElement);
        return this.items;
   }
remove(ele) {
    let index = this.items.indexOf(ele);
    if (index == -1) {
        return "Element not found in stack";
    }
    this.items.splice(index, 1);
    return;
}
    merge(stack2) {
        let stack1 = this.items;
        while (stack2.length > 0) {
            stack.push(stack2.pop());
        }
        return stack1;
    }
  }
  console.log("Initialize a stack:")
  let stack = new Stack();
  console.log("Input some elements on the stack:")
  stack.push(1);
  stack.push(4);
  stack.push(3);
  stack.push(2);
  stack.push(5);
  console.log(stack.displayStack(stack));
  stack.sort_Stack(stack);
  console.log("Sort the elements of the stack in descending order:")
  console.log(stack.displayStack(stack));
  console.log("Remove one element and insert two elements:")
  stack.pop();
  stack.push(0);
  stack.push(8);
  console.log(stack.displayStack(stack));
  stack.sort_Stack(stack);
  console.log("Sort the elements of the stack in descending order:")
  console.log(stack.displayStack(stack));
  