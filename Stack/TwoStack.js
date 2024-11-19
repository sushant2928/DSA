/**
 * https://www.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1
 */

class TwoStacks {
  // constructor for twoStacks()
  constructor() {
    this.elements = new Array(100);
    this.top1 = -1;
    this.top2 = 100;
  }

  // Function to push an integer into the stack1.
  push1(x) {
    if (this.top1 === 49) {
      return;
    }
    this.elements[this.top1 + 1] = x;
    this.top1 += 1;
  }

  // Function to push an integer into the stack2.
  push2(x) {
    if (this.top2 === 50) {
      return;
    }
    this.elements[this.top2 - 1] = x;
    this.top2 -= 1;
  }

  // Function to remove an element from top of the stack1.
  pop1() {
    if (this.top1 === -1) return -1;
    const element = this.elements[this.top1];
    this.elements[this.top1] = undefined;
    this.top1 -= 1;
    return element;
  }

  // Function to remove an element from top of the stack2.
  pop2() {
    if (this.top2 === -1) return -1;
    const element = this.elements[this.top2];
    this.elements[this.top2] = undefined;
    this.top2 += 1;
    return element;
  }
}
