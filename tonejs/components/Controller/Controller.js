"use client"

import Player from "../Player/Player";
import Mixer from "../Mixer/Mixer";
import styles from "./Controller.module.css";
import { useState, useRef, useEffect} from 'react'
import * as Tone from 'tone/build/esm/'

export default function Controller() {
  const [rotation, setRotation] = useState(0);
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
    setRotation(value);
    Tone.Transport.position = `+${1 * value}`;
  }

  return (
    <main className={styles.grid_container}>
      <section className={styles.grid_item}>
        <Player
          playerRef={player}
          onPlayPause={handlePlayPause}
          onCue={handleCue}
          onTempoChange={handleTempoChange}
          onTurn={handleTurn}
          rotation={rotation}
        />
      </section>
      <section className={styles.grid_item}>
        <Mixer 
        player={player}
        />
      </section>
      <section className={styles.grid_item}>
        <Player
          player={player}
          onPlayPause={handlePlayPause}
          onCue={handleCue}
          onTempoChange={handleTempoChange}
          onTurn={handleTurn}
          rotation={rotation}
        />
      </section>
    </main>
  );
}
