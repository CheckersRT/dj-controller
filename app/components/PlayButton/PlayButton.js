"use client"

import { useRef } from "react";

export default function PlayButton() {

    let audioContext;
    let track;

    const audioElement = useRef()
    
    const playButton = useRef()
    
    const AudioContext = window.AudioContext || window.webkitAudioContext;

    audioContext = new AudioContext();
    track = new MediaElementAudioSourceNode(audioContext, {
        mediaElement: audioElement,
    })
    // track = audioContext.createMediaElementSource(audioElement)
    
    
    function handleClick() {
        
        audioElement.play();

    }
    
    return (
        <>
        <audio ref={audioElement} src="/Massive.wav"></audio>
        <button ref={playButton} onClick={handleClick}>Play</button>
        </>
    )
}