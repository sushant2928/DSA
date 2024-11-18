/**
 * @class Stack
 * @private elements
 * @method push
 * @method pop
 * @method peek
 * @method isEmpty
 */

class Stack {
  constructor() {
    this.elements = [];
  }
  push(value) {
    this.elements.push(value);
  }
  isEmpty() {
    return this.elements.length === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.elements[this.elements.length - 1];
  }
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.elements.pop();
  }
  printStack() {
    return this.elements.reduce((res, curr, index) => {
      res = res + curr;
      if (index < this.elements.length - 1) res = res + ",";
      return res;
    }, "");
  }
}

const stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(2);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.printStack());
