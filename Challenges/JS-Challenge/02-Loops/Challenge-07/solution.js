function totalStars(starLevels) {
  let totalCount = 0;
  for (let i = 0; i < starLevels.length; i++) {
    totalCount += starLevels[i].length;
  }
  return totalCount;
}
