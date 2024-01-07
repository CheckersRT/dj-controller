import { useEffect, useState, useRef } from "react";
import styles from "./Player.module.css";
import PlayButton from "../PlayButton/PlayButton";
import CueButton from "../CueButton/CueButton";
import TempoControl from "../TempoControl/TempoControl";
import JogWheel from "../JogWheel/JogWheel";
import * as Tone from "tone/build/esm";

export default function Player({ player, context }) {
  const [rotation, setRotation] = useState(0);
  const [playTime, setPlayTime] = useState(0);
  const [timeElasped, setTimeElasped] = useState(0);

  function handlePlayPause() {
    if (Tone.Transport.state !== "started") {
    Tone.Transport.start();
    // player.current.sync()
    }
    if (player.current.state === "stopped") {
      setPlayTime(player.current.context.currentTime);
      console.log("Play time: ", player.current.context.currentTime);
      console.log("Elasped Time:", timeElasped);
      player.current.start(0, timeElasped);
    } else if (player.current.state === "started") {
      player.current.stop();
      setTimeElasped(
        timeElasped + (player.current.context.currentTime - playTime)
      );
      console.log(
        `${player.current.context.name} Pause time: ${player.current.context.currentTime}`
      );
    }
  }

  function handleCue() {
    Tone.Transport.stop();
  }

  function handleTempoChange(percentage) {
    const newPlaybackRate = 1 + percentage * player.current.playbackRate;
    player.current.playbackRate = newPlaybackRate;
    console.log(newPlaybackRate);
  }

  function handleTurn(value) {
    console.log(value)
    setRotation(value);
    console.log(player.current.transport)
    Tone.Transport.position = `+${1 * value}`;
    // player.current.transport.position.value = `+${1 * value}`;
  }

  return (
    <div className={styles.grid_container}>
      <div className={styles.grid_a}>Hi</div>
      <div className={styles.grid_b}>
        <JogWheel onTurn={handleTurn} $rotation={rotation} />
      </div>
      <div className={styles.grid_c}>SHIFT</div>
      <div className={styles.grid_d}>
        <TempoControl onTempoChange={handleTempoChange} />
      </div>
      <div className={styles.grid_e}>
        <CueButton player={player} onCue={handleCue} />
      </div>
      <div className={styles.grid_f}>HOT CUES</div>
      <div className={styles.grid_g}>
        <PlayButton player={player} onPlayPause={handlePlayPause} />
      </div>
    </div>
  );
}
