import Image from "next/image";
import styles from "./CueButton.module.css";

export default function CueButton({ onCue }) {
  return (
    <>
      <button className={styles.button} onClick={() => onCue()}>
        <Image
          className="buttonImage"
          src="/images/cue.svg"
          alt="cue button"
          width={120}
          height={130}
          priority
        />
      </button>
    </>
  );
}
