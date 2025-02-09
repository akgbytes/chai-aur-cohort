function trafficLightAction(color) {
  // Return "Stop", "Slow Down", or "Go" based on the traffic light color
  color = color.toLowerCase();
  switch (color) {
    case "red":
      return "Stop";
    case "yellow":
      return "Slow Down";
    case "green":
      return "Go";
    default:
      return "Invalid Color";
  }
}
