function countBoxes(totalBars, barsPerBox) {
  let boxes = 0;
  while (totalBars >= barsPerBox) {
    totalBars -= barsPerBox;
    boxes += 1;
  }
  return boxes;
}
