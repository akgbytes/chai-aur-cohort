function totalWater(waterAmounts) {
  let totalAmount = 0;
  for (let i = 0; i < waterAmounts.length; i++) {
    totalAmount += waterAmounts[i];
  }
  return totalAmount;
}
