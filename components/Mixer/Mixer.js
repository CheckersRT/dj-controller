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
  const [knobId, setKnobId] = useState("")

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
    setKnobId(event.target.id)


    console.log(event.target)
    if(event.target.id === "low1") {
      eQsCh1.current.low.value = angle / 10;

    }

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

  const channelArray = [
    {
      id: "1",
      channel: ["gain", { eqs: ["high", "mid", "low"] }, "filter", "fader"],
    },
    {
      id: "2",
      channel: ["gain", { eqs: ["high", "mid", "low"] }, "filter", "fader"],
    },
  ];

  return (
    <div className={styles.container}>
      <p>MIXER</p>
      {channelArray.map((channel) => {
        return (
          <div key={channel.id}>
            <div>
              {channelArray[channel.id-1].channel[1].eqs.map((eq) => (
                <KnobEq
                  knobId={knobId}
                  key={eq}
                  name={channel.id+eq}
                  $knobAngle={angle}
                  knobImage={knobImageRef}
                  onTurn={handleTurn}
                  setMouseDown={setMouseDown}
                  onMouseMove={handleMouseMove}
                  mouseDown={mouseDown}
                />
              ))}
            </div>
            <label htmlFor={channel.id}>Channel {channel.id} fader</label>
            <input
              id={channel.id}
              name={channel.id}
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
