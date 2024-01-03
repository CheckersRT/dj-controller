"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRef, useState } from "react";
import KnobBasic from "./components/KnobBasic/KnobBasic";
import PlayButton from "./components/PlayButton/PlayButton";

export default function Home() {
  const [playingOrPaused, setPlayingOrPaused] = useState("paused");

  let audioContext;
  let track;

  const audioElement = useRef();
  console.log(audioElement);

  const playButton = useRef();
  console.log(playButton);

  function handlePlay() {
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
      <audio ref={audioElement} src="/UnderTheBanner.m4a"></audio>
      <button ref={playButton} onClick={handlePlay}>
        Play
      </button>
      <KnobBasic />
      <KnobBasic />
      <KnobBasic />
      {/* <PlayButton/> */}
    </>
  );
}
