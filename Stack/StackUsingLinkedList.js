/**
 * @class Stack
 * @private elements
 * @method push
 * @method pop
 * @method peek
 * @method isEmpty
 * @method printStack
 */

const { ListNode } = require("../LinkedList/ListNode");

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(value) {
    const element = new ListNode();
    element.value = value;
    if (this.top === null) this.top = element;
    else {
      element.next = this.top;
      this.top = element;
    }
    this.size += 1;
  }
  isEmpty() {
    return this.size === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.top.value;
  }
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    const elem = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return elem;
  }
  printStack() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    let head = new ListNode(this.top);
    let str = "";

    while (head?.value) {
      str = str + head.value;
      if (head.next) {
        str = str + ",";
      }
      head = head?.next;
    }
    return str;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(4);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.printStack());
