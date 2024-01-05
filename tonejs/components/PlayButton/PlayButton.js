import * as Tone from "tone/build/esm/index";
import styles from "./PlayButton.module.css"

export default function PlayButton( {player} ) {

  async function handlePlayPause() {
    if(player.state === "stopped") {
      Tone.Transport.start()
    } else if (player.state === "started") {
      Tone.Transport.pause()
    }
  }

  return <button className={styles.button} onClick={() => handlePlayPause()} role="switch" aria-checked></button>;
}
