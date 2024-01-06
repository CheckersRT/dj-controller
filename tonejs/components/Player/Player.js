
import { useEffect, useState, useRef } from "react";
import styles from "./Player.module.css";
import PlayButton from "../PlayButton/PlayButton";
import CueButton from "../CueButton/CueButton";
import TempoControl from "../TempoControl/TempoControl";
import JogWheel from "../JogWheel/JogWheel";

export default function Player({
  player,
  onPlayPause,
  onCue,
  onTempoChange,
  onTurn,
  rotation,
}) {

  return (
    <div className={styles.grid_container}>
      <div className={styles.grid_a}>Hi</div>
      <div className={styles.grid_b}>
        <JogWheel onTurn={onTurn} $rotation={rotation} />
      </div>
      <div className={styles.grid_c}>SHIFT</div>
      <div className={styles.grid_d}>
        <TempoControl onTempoChange={onTempoChange} />
      </div>
      <div className={styles.grid_e}>
        <CueButton player={player} onCue={onCue} />
      </div>
      <div className={styles.grid_f}>HOT CUES</div>
      <div className={styles.grid_g}>
        <PlayButton player={player} onPlayPause={onPlayPause} />
      </div>
    </div>
  );
}
