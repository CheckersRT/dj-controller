"use client";
import Image from "next/image";
import styles from "./page.module.css";
import * as Tone from 'tone';
import { Player } from "tone";
import { useRef, useState } from "react";
import EqLow from "./components/Eq/EqLow";
import PlayButton from "./components/PlayButton/PlayButton";
import CueButton from "./components/CueButton/CueButton";
import LevelMeter from "./components/LevelMeter/LevelMeter";

export default function Home() {
  const [playingOrPaused, setPlayingOrPaused] = useState("paused");

  let audioContext = useRef();
  let track = useRef();
  let gainNode = useRef();

  // references audio tag in jsx
  const audioElement = useRef();

  // function called if there is no audio context present (on first render)
  function createAudioContext() {
    if (!audioContext.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContext.current = new AudioContext();
    }

    if (!track.current) {
      track.current = audioContext.current.createMediaElementSource(audioElement.current);
      console.log("track in createAudioContext:", track);
    }

    if (!gainNode.current) {
      gainNode.current = new GainNode(audioContext.current);
      track.current.connect(gainNode.current).connect(audioContext.current.destination);
    }
  }

  // functionality for Play/Pause button
  function handlePlayPause() {
    if (!audioContext.current) {
      createAudioContext();
    }
    if (audioContext.current.state === "suspended") {
      audioContext.resume();
    }
    if (playingOrPaused === "paused") {
      audioElement.current.play();
      setPlayingOrPaused("playing");
    } else {
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

  function controlLevel(value) {
    if (!audioContext) {
      createAudioContext();
    }
    console.log(gainNode)
    gainNode.current.gain.value = value;
  }


  // function handleEq() {
  // }

  return (
    <>
      <audio ref={audioElement} src="/UnderTheBanner.m4a"></audio>
      <EqLow onClick={handleEq}/>
      <LevelMeter controlLevel={controlLevel} />
      <CueButton onCue={handleCue} />
      <PlayButton onPlayPause={handlePlayPause} />
    </>
  );
}
