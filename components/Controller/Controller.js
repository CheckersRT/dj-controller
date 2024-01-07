"use client";

import Player from "../Player/Player";
import Mixer from "../Mixer/Mixer";
import styles from "./Controller.module.css";
import { useState, useRef, useEffect } from "react";
import * as Tone from "tone/build/esm/";

export default function Controller() {
  let player1 = useRef();
  let player2 = useRef();

  useEffect(() => {
    if (!player1.current) {
      player1.current = new Tone.Player({
        url: "/UnderTheBanner.m4a",
      }).toDestination();
      console.log(player1)
    } else if (!player2.current) {
      player2.current = new Tone.Player({
        url: "/hiphop.wav",
      }).toDestination();
      console.log(player2.current)
    }
  }, []);

  function handleCrossFade(value) {
    const crossFade = new Tone.CrossFade().toDestination();
    player1.current.connect(crossFade.a)
    player2.current.connect(crossFade.b)
    crossFade.fade.value = value;
  }


  return (
    <main className={styles.grid_container}>
      <section className={styles.grid_item}>
        <Player key={player1} player={player1}/>
      </section>
      <section className={styles.grid_item}>
        <Mixer player1={player1} player2={player2} onCrossFade={handleCrossFade} />
      </section>
      <section className={styles.grid_item}>
        <Player key={player2} player={player2}/>
      </section>
    </main>
  );
}
