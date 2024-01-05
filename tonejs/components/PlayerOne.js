"use client";

import * as Tone from "tone/build/esm/index";
import { useEffect, useState, useRef } from "react";
import styles from './PlayerOne.module.css'
import PlayButton from "./PlayButton/PlayButton";
import CueButton from "./CueButton/CueButton";
import TempoControl from "./TempoControl/TempoControl";
import JockyWheel from "./JockyWheel/JockyWheel";

export default function PlayerOne() {
  const [rotation, setRotation] = useState(0)
  let player = useRef();

  useEffect(() => {
    if (!player.current) {
      player.current = new Tone.Player({
        url: "/UnderTheBanner.m4a",
      }).toDestination();
      player.current.sync().start(0);
    }
  }, []);

  function handlePlayPause() {
    if (player.current.state === "stopped") {
      Tone.Transport.start();
    } else if (player.current.state === "started") {
      Tone.Transport.pause();
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
    setRotation(value)
    Tone.Transport.position = `+${1*value}`
  }

  return (
    <div className={styles.grid_container}>
      <div className={styles.grid_a}>Hi</div>
      <JockyWheel className={styles.grid_b} onTurn={handleTurn} $rotation={rotation}/>
      <div className={styles.grid_c} >SHIFT</div>
      <TempoControl className={styles.grid_d} onTempoChange={handleTempoChange} />
      <CueButton className={styles.grid_e} player={player} onCue={handleCue} />
      <div className={styles.grid_f} >HOT CUES</div>
      <PlayButton className={styles.grid_g} player={player} onPlayPause={handlePlayPause} />
    </div>
  );
}
