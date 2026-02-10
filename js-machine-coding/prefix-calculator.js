// calculate expressions in Polish Notation- Prefix calculator
/*
console.log(evaluatePrefix("+ 5 4"));          // Output: 9  (5 + 4)
console.log(evaluatePrefix("* + 2 3 5"));      // Output: 25 ((2 + 3) * 5)
console.log(evaluatePrefix("- 10 / 8 2"));     // Output: 6  (10 - (8 / 2))
console.log(evaluatePrefix("+ - 10 10 5"));    // Output: 5  ((10 - 10) + 5)
*/

function evaluate(expression) {
  const tokens = expression.split(" ").reverse(); //create a space-seperated array and reverse it to obtain the operands before operators.
  const stack = []; //this will hold numerical operands and finally the answer

  tokens.forEach((token) => {
    //check if current token char is number.
    if (!isNaN(token)) stack.push(Number(token));
    else {
      const operand1 = stack.pop();
      const operand2 = stack.pop();

      switch (token) {
        case "+":
          stack.push(operand1 + operand2);
          break;
        case "-":
          stack.push(operand1 - operand2);
          break;
        case "*":
          stack.push(operand1 * operand2);
          break;
        case "/":
          stack.push(operand1 / operand2);
          break;
        default:
          throw new Error(`Unsopported operator: ${token}`);
      }
    }
  });
  return stack.pop(); //pops out last array element and return it
}

console.log(evaluate("+ 5 4")); // Output: 9  (5 + 4)
console.log(evaluate("* + 2 3 5")); // Output: 25 ((2 + 3) * 5)
console.log(evaluate("- 10 / 8 2")); // Output: 6  (10 - (8 / 2))
console.log(evaluate("+ - 10 10 5")); // Output: 5  ((10 - 10) + 5)
console.log(evaluate("+ / 5 13 4")); // Output: 5  (5/13 + 4)

/*

5 3 2 + *

*/
