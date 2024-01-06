"use client";

import Player from "../Player/Player";
import Mixer from "../Mixer/Mixer";
import styles from "./Controller.module.css";
import { useState, useRef, useEffect } from "react";
import * as Tone from "tone/build/esm/";

export default function Controller() {
  let playerOne = useRef();
  let playerTwo = useRef();

  useEffect(() => {
    if (!playerOne.current) {
      playerOne.current = new Tone.Player({
        url: "/UnderTheBanner.m4a",
      }).toDestination();
      playerOne.current.sync().start(0);
    } else if (!playerTwo.current) {
      playerTwo.current = new Tone.Player({
        url: "/hiphop.wav",
      }).toDestination();
      playerTwo.current.sync().start(0);
    }
  }, []);

  return (
    <main className={styles.grid_container}>
      <section className={styles.grid_item}>
        <Player player={playerOne} />
      </section>
      <section className={styles.grid_item}>
        <Mixer playerOne={playerOne} playerTwo={playerTwo}/>
      </section>
      <section className={styles.grid_item}>
        <Player player={playerTwo} />
      </section>
    </main>
  );
}
