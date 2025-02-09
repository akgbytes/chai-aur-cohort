function calculator(num1, num2, operator) {
  // Perform basic arithmetic operations using switch case
  if (num2 === 0) {
    return "Cannot divide by zero";
  }
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid Operator";
  }
}
