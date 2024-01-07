
import KnobEq from "../KnobEq/KnobEq";
import styles from "./Mixer.module.css";
import { useRef, useState } from "react";
import calculateAngle from "@/ultils/calculateAngle";

export default function Mixer({ player1, player2, onCrossFade }) {
  const [mousePosition, setMousePosition] = useState({
    moveX: 0,
    moveY: 0,
  });
  const [mouseDown, setMouseDown] = useState(false);
  const [angle, setAngle] = useState(0);

  const knobImageRef = useRef();

  function handleTurn(event) {
    //Get coordinates for center of image
    const { height, width, x, y } =
      knobImageRef.current.getBoundingClientRect();

    const centerX = x + width / 2;
    const centerY = y + height / 2;

    // Get position of mouse
    const mouseX = mousePosition.moveX;
    const mouseY = mousePosition.moveY;

    setAngle(calculateAngle(centerX, centerY, mouseX, mouseY));

    playerOne.current.volume.value = angle / 20;
  }

  function handleMouseMove(event) {
    console.log(event.clientX, event.clientY);
    setMousePosition({
      moveX: event.clientX,
      moveY: event.clientY,
    });
  }

  return (
    <div className={styles.container}>
      <p>MIXER</p>
      <KnobEq
        $knobAngle={angle}
        knobImage={knobImageRef}
        onTurn={handleTurn}
        setMouseDown={setMouseDown}
        onMouseMove={handleMouseMove}
        mouseDown={mouseDown}
      />
      <input type="range" min={0} max={1} step={0.1} onChange={(event) => onCrossFade(event.target.value)}></input>
    </div>
  );
}
