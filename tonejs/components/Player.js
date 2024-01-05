"use client";

import { useEffect } from "react";
import * as Tone from "tone/build/esm/index";

export default function Player() {
  const player = new Tone.Player({
      url: "/hiphop.wav",
      loop: true,
      loopStart: 0.5,
      loopEnd: 0.7,
    }).toDestination();

  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "8n");



  async function handlePlay() {
    console.log("button clicked");
    await Tone.start();
    const now = Tone.now();
      // trigger the attack immediately
//   synth.triggerAttack("C4", now);
//   // wait one second before triggering the release
//   synth.triggerRelease(now + 1);

    console.log("audio is ready");
  }

  return <button onClick={() => handlePlay()}>Play</button>;
}
