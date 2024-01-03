"use client";
import Image from 'next/image'
import { useRef } from "react";
import styles from './PlayButton.module.css'

export default function PlayButton({ onPlayPause }) {


  return (
    <>
      <button className={styles.button} onClick={() => onPlayPause()}>
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
