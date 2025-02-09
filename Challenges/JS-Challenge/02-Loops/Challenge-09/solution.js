function shinyDiamondRug(n) {
  let upperPart = "";
  let lowerPart = "";
  for (let i = 0; i < n; i++) {
    upperPart += `${" ".repeat(n - i - 1)}${"*".repeat(2 * i + 1)}\n`;
  }
  for (let j = n - 1; j > 0; j--) {
    lowerPart += `${" ".repeat(n - j)}${"*".repeat(2 * j - 1)}\n`;
  }

  return upperPart + lowerPart.trimEnd(`\n`);
}
