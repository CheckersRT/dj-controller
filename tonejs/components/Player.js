"use client";

import * as Tone from "tone/build/esm/index";
import PlayButton from "./PlayButton/PlayButton";
import CueButton from "./CueButton/CueButton";

export default function Player() {
  const player = new Tone.Player({
    url: "/hiphop.wav",
  }).toDestination();

  player.sync().start(0) 

  return (
    <>
      <CueButton player={player} />
      <PlayButton player={player} />
    </>
  );
}
