function totalPrice(prices) {
  return prices.reduce((acc, currVal) => acc + currVal, 0);
}
