function invertedMountain(n) {
  let invertedStars = "";
  for (let i = n; i > 0; i--) {
    invertedStars += `${"*".repeat(i)}\n`;
  }
  return invertedStars.trimEnd();
}
