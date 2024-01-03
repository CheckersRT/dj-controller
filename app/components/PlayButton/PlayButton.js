"use client";
import Image from 'next/image'
import { useRef } from "react";
import styles from './PlayButton.module.css'

export default function PlayButton({ playingOrPaused, onPlayPause }) {
  const audioElement = useRef();
  console.log(audioElement);

  return (
    <>
      <audio ref={audioElement} src="/UnderTheBanner.m4a"></audio>
      <button className={styles.button} onClick={() => onPlayPause(audioElement)}>
      <Image    
                className='buttonImage'
                src="/images/playPause.svg"
                alt="play/pause button"
                width={120}
                height={130}
                priority
                />
        </button>
    </>
  );
}
