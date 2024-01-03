"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRef, useState } from "react";
import KnobBasic from "./components/KnobBasic/KnobBasic";
import PlayButton from "./components/PlayButton/PlayButton";

export default function Home() {
  const [playingOrPaused, setPlayingOrPaused] = useState("paused");

  let audioContext;

  function handlePlayPause(audioElement) {
    if (!audioContext) {
      createAudioContext();
    }
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
    if (playingOrPaused === "paused") {
      audioElement.current.play();
      setPlayingOrPaused("playing");
    }
    if (playingOrPaused === "playing") {
      audioElement.current.pause();
      setPlayingOrPaused("paused");
    }
  }

  function createAudioContext() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContext();
  }

  return (
    <>
      <KnobBasic />
      <KnobBasic />
      <KnobBasic />
      <PlayButton playingOrPaused={playingOrPaused} onPlayPause={handlePlayPause}/>
    </>
  );
}
