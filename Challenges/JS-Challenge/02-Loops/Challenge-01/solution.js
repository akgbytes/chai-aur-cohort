function distributeGifts(totalGifts, friends) {
  let count = 0;
  while (totalGifts > 0 && friends > 0) {
    // give one gift and increase count by 1
    totalGifts--;
    count++;
    friends--; // one friend receives a gift
  }
  return count;
}
