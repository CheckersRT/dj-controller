import * as Tone from "tone/build/esm/index";
import styles from "./CueButton.module.css";

export default function CueButton({ player, onCue }) {
  return (
    <button
      className={styles.button}
      onClick={() => onCue()}
      role="switch"
      aria-checked
    ></button>
  );
}
