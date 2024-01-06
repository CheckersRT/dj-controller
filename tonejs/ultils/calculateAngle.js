export default function calculateAngle(centerX, centerY, mouseX, mouseY) {
    
    let opposite;
    let adjacent;
    let angle;
    // Calculate angle between mouse position and center of circle in each quartile
    // tan0 = O/A 0 tan-1(opposite/adjacent)
    if (mouseY <= centerY) {
      opposite = mouseX - centerX;
      adjacent = centerY - mouseY;
      angle = Math.round(Math.atan(opposite / adjacent) * (180 / Math.PI));
    } else if (mouseY >= centerY && mouseX >= centerX) {
      opposite = mouseX - centerX;
      adjacent = mouseY - centerY;
      angle = Math.round(
        180 - Math.atan(opposite / adjacent) * (180 / Math.PI)
      );
    } else if (mouseY >= centerY && mouseX <= centerX) {
      opposite = centerX - mouseX;
      adjacent = mouseY - centerY;
      angle = Math.round(
        Math.atan(opposite / adjacent) * (180 / Math.PI) - 180
      );
    }

    return angle
}