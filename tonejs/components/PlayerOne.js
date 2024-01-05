"use client";

import * as Tone from "tone/build/esm/index";
import { useEffect, useState, useRef } from "react";
import PlayButton from "./PlayButton/PlayButton";
import CueButton from "./CueButton/CueButton";
import TempoControl from "./TempoControl/TempoControl";
import JockyWheel from "./JockyWheel/JockyWheel";

export default function PlayerOne() {
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
    // console.log(value)
    // Tone.Transport.pause()
    // player.current.seek(`+${value}`)
    // console.log(player.current)
    // console.log("Current clock time: ", Tone.immediate())
    // player.current.seek(10, 0)
    // console.log("Clock time after seek: ", Tone.immediate())
    Tone.Transport.position = `+${1*value}`
    // set the value of the input back to 0 at the end of the function
    // if(event.target.value !== 0) {event.target.value = 0}
  }

  return (
    <>
      <JockyWheel onTurn={handleTurn}/>
      <CueButton player={player} onCue={handleCue} />
      <PlayButton player={player} onPlayPause={handlePlayPause} />
      <TempoControl onTempoChange={handleTempoChange} />
    </>
  );
}
