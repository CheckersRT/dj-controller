"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRef, useState } from "react";
import KnobBasic from "./components/KnobBasic/KnobBasic";
import PlayButton from "./components/PlayButton/PlayButton";
import CueButton from "./components/CueButton/CueButton";

export default function Home() {
  const [playingOrPaused, setPlayingOrPaused] = useState("paused");

  let audioContext;

  // references audio tag in jsx
  const audioElement = useRef();
  console.log(audioElement);

  // functionality for Play/Pause button

  function handlePlayPause() {
    if (!audioContext) {
      createAudioContext();
    }
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
    if (playingOrPaused === "paused" ) {
      audioElement.current.play();
      setPlayingOrPaused("playing");
    }
    if (playingOrPaused === "playing") {
      audioElement.current.pause();
      setPlayingOrPaused("paused");
    }
  }

  // functionality for Cue Button
  function handleCue() {
    if (!audioContext) {
      createAudioContext();
    }
    audioElement.current.pause();
    audioElement.current.currentTime = 0;
    setPlayingOrPaused("paused");
  }

  // function called if there is no audio context present (on first render)
  function createAudioContext() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContext();
  }

  return (
    <>
      <audio ref={audioElement} src="/UnderTheBanner.m4a"></audio>
      <KnobBasic />
      <KnobBasic />
      <KnobBasic />
      <CueButton onCue={handleCue} />
      <PlayButton onPlayPause={handlePlayPause} />
    </>
  );
}
