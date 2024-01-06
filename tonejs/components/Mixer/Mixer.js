"use client";

import KnobEq from "../KnobEq/KnobEq";
import styles from "./Mixer.module.css";
import { useRef, useState } from "react";

export default function Mixer() {
  const [mousePosition, setMousePosition] = useState({
    moveX: 0,
    moveY: 0,
  });
  const [mouseDown, setMouseDown] = useState(false);
  const [angle, setAngle] = useState(0);

  const knobSliderRef = useRef();
  const knobImageRef = useRef();

  function handleClick(event) {

    // if on mouse down is true and on mouse up is false

    console.log(knobImageRef.current.getBoundingClientRect());

    //Get coordinates for center of image
    const { height, width, x, y } =
      knobImageRef.current.getBoundingClientRect();

    console.log("deconstructed", height, width, x, y);

    const centerX = x + width / 2;
    const centerY = y + height / 2;
    console.log("Center of image: ", centerX, centerY);

    // Get position of mouse on Click
    const mouseX = mousePosition.moveX;
    const mouseY = mousePosition.moveY;
    // const mouseX = event.clientX;
    // const mouseY = event.clientY;
    console.log("Mouse coordinates on click: ", mouseX, mouseY);

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

    console.log("The angle is: ", angle, opposite, adjacent);

    setAngle(angle)
    knobSliderRef.current.value = angle;
    console.log(knobSliderRef.current.value);
  }

  function handleMouseMove(event) {
    console.log(event.clientX, event.clientY);
    setMousePosition({
      moveX: event.clientX,
      moveY: event.clientY,
    });
  }

  function handleMouseDown(){
    setMouseDown(true)
  }

  function handleMouseUp() {
    setMouseDown(false)
  }

  return (
    <div className={styles.container}>
      <p>MIXER</p>
      <KnobEq
        $knobAngle={angle}
        knobSlider={knobSliderRef}
        knobImage={knobImageRef}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        mouseDown={mouseDown}
      />
    </div>
  );
}
