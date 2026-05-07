/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // inputs: ["2","1","+","3","*"] as tokens
  // outputs: 9 the result after arithmetic expression on inputs
  // constraints: The valid operators are '+', '-', '*', and '/'.
  // Each operand may be an integer or another expression.
  // The division between two integers always truncates toward zero.
  // There will not be any division by zero.
  // The input represents a valid arithmetic expression in a reverse polish notation.
  // The answer and all the intermediate calculations can be represented in a 32-bit integer.
  // flow:
  // I will initialize a stack
  // push 2 element inside the stack;
  // I will check if any str is a number or an operation
  // then if number then I will push another element until I see an operation
  // once I see an operation I will immediately pop the other previous two elements
  // and do the operation on those two elements and store them into the result.
  let stack = [];
  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      let b = stack.pop();
      let a = stack.pop();

      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(Math.trunc(a / b));
          break;
      }
    }
    // if (token === "+") {
    //   stack.push(a + b);
    // } else if (token === "-") {
    //   stack.push(a - b);
    // } else if (token === "*") {
    //   stack.push(a * b);
    // } else if (token === "/") {
    //   stack.push(Math.trunc(a / b));
    // }
  }
  return stack.pop();
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(
  evalRPN([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ]),
);
