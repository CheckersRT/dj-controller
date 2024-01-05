import * as Tone from "tone/build/esm/index";
import styles from "./CueButton.module.css"

export default function CueButton( {player} ) {

  function handleCue() {
    Tone.Transport.stop()
  }

  return <button className={styles.button} onClick={() => handleCue()} role="switch" aria-checked></button>;
}
