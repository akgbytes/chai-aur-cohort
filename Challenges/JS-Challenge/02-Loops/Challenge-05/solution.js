function countSteps(targetSteps) {
  let totalSteps = 0;
  while (targetSteps) {
    targetSteps -= 1;
    totalSteps += 1;
  }
  return totalSteps;
}
