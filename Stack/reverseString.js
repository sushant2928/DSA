const { Stack } = require("./Stack");

const reverseString = (str) => {
  const stack = new Stack();
  str.split("").forEach((letter) => {
    stack.push(letter);
  });
  let reverseStr = "";
  while (!stack.isEmpty()) {
    reverseStr += stack.pop();
  }
  console.log(reverseStr);
  return reverseStr;
};

console.log(reverseString("ABCDE"));
