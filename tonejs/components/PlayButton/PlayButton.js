import * as Tone from "tone/build/esm/index";
import styles from "./PlayButton.module.css";

export default function PlayButton({ player, onPlayPause }) {

  return (
    <button
      className={styles.button}
      onClick={() => onPlayPause()}
      role="switch"
      aria-checked
    ></button>
  );
}
