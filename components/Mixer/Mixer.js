import KnobEq from "../KnobEq/KnobEq";
import styles from "./Mixer.module.css";
import { useRef, useState } from "react";
import calculateAngle from "@/ultils/calculateAngle";

export default function Mixer({
  player1,
  player2,
  crossFade,
  channel1,
  channel2,
  eQsCh1,
  eQsCh2,
}) {
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

    // player1.current.volume.value = angle / 20;
    eQsCh1.current.low.value = angle / 10;
    console.log("EQ: ", eQsCh1.current);
    console.log("EQ value: ", eQsCh1.current.low.value);
  }

  function handleMouseMove(event) {
    console.log(event.clientX, event.clientY);
    setMousePosition({
      moveX: event.clientX,
      moveY: event.clientY,
    });
  }

  function handleCrossFade(value) {
    console.log(crossFade.current.fade);
    console.log(value);
    crossFade.current.fade.value = value;
  }

  function handleVolumeFader(event) {
    console.log(event, channel1.current.volume.value);
    if (event.target.name === "faderChannel1")
      player1.current.volume.value = event.target.value;
    if (event.target.name === "faderChannel2")
      player2.current.volume.value = event.target.value;
  }

  const mixer = [
    {
      channel1: {
        gain: 0,
        eQs: {
          high: 0,
          mid: 0,
          low: 0,
        },
        filter: 0,
        fader: 0,
      },
    },
    {
      channel1: {
        gain: 0,
        eQs: {
          high: 0,
          mid: 0,
          low: 0,
        },
        filter: 0,
        fader: 0,
      },
    },
  ];

  const channelArray2 = [
    { id: "1", channel1: ["gain", { eqs: ["high", "mid", "low"] }, "filter", "fader"] },
    { id: "2", channel2: ["gain", { eqs: ["high", "mid", "low"] }, "filter", "fader"] },
  ];

  const eQArray = ["high", "mid", "low"];
  const channelArray = ["channel1", "channel2"];

  return (
    <div className={styles.container}>
      <p>MIXER</p>
      {channelArray.map((channel) => {
        return (
          <div key={channel}>
            <div>
              {eQArray.map((eq) => (
                <KnobEq
                  key={eq}
                  $knobAngle={angle}
                  knobImage={knobImageRef}
                  onTurn={handleTurn}
                  setMouseDown={setMouseDown}
                  onMouseMove={handleMouseMove}
                  mouseDown={mouseDown}
                />
              ))}
            </div>
            <label htmlFor="faderChannel1">Channel 1 fader</label>
            <input
              id="faderChannel1"
              name="faderChannel1"
              type="range"
              min={-60}
              max={0}
              step={1}
              onChange={(event) => handleVolumeFader(event)}
            ></input>
          </div>
        );
      })}
      <label htmlFor="crossFade">Crossfader</label>
      <input
        id="crossFade"
        name="crossFade"
        type="range"
        min={0}
        max={1}
        step={0.1}
        onChange={(event) => handleCrossFade(event.target.value)}
      ></input>
    </div>
  );
}
