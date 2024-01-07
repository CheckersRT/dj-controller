"use client";

import Player from "../Player/Player";
import Mixer from "../Mixer/Mixer";
import styles from "./Controller.module.css";
import { useState, useRef, useEffect } from "react";
import * as Tone from "tone/build/esm/";

export default function Controller() {
  let player1 = useRef();
  let player2 = useRef();
  let crossFade = useRef();
  let channel1 = useRef();
  let channel2 = useRef();
  let eQsCh1 = useRef();
  let eQsCh2 = useRef();

  useEffect(() => {

    // initialise Players
    if (!player1.current) {
      player1.current = new Tone.Player({
        url: "/UnderTheBanner.m4a",
      }).toDestination();

    } 
    if (!player2.current) {
      player2.current = new Tone.Player({
        url: "/hiphop.wav",
      }).toDestination();
    }
    // init crossfader
    crossFade.current = new Tone.CrossFade().toDestination();
    player1.current.connect(crossFade.current.b);
    player2.current.connect(crossFade.current.b);

    // init channels
    channel1.current = new Tone.Channel().toDestination();
    channel2.current = new Tone.Channel().toDestination();
    player1.current.connect(channel1.current);
    player2.current.connect(channel2.current);

    // create level meters
    const levelMeter = new Tone.Meter({ channels: 2} );
    Tone.Destination.chain(levelMeter);

    //create EQs

    eQsCh1.current = new Tone.EQ3({lowFrequency: 400, highFrequency: 2500,
    }).toDestination();
    eQsCh2.current = new Tone.EQ3({lowFrequency: 400, highFrequency: 2500,
    }).toDestination();
    player1.current.connect(eQsCh1.current)
    player2.current.connect(eQsCh2.current)
  }, []);
  
  return (
    <main className={styles.grid_container}>
      <section className={styles.grid_item}>
        <Player key={player1} player={player1}/>
      </section>
      <section className={styles.grid_item}>
        <Mixer player1={player1} player2={player2} crossFade={crossFade} channel1={channel1} channel2={channel2} eQsCh1={eQsCh1} eQsCh2={eQsCh2} />
      </section>
      <section className={styles.grid_item}>
        <Player key={player2} player={player2}/>
      </section>
    </main>
  );
}
