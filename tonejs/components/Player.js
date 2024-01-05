"use client";

import { useEffect } from "react";
import * as Tone from "tone/build/esm/index";

export default function Player() {

// const file = URL.createObjectURL()

  const player = new Tone.Player({
      url: "/hiphop.wav",
    }).toDestination();

  async function handlePlay() {
    await Tone.start()
    player.start()
  }

  return <button onClick={() => handlePlay()}>Play</button>;
}
