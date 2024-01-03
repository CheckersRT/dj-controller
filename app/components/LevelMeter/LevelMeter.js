import styles from './LevelMeter.module.css'

export default function LevelMeter( {controlLevel} ) {


  return (
    <>
      <label htmlFor="volume"></label>
      <input className={styles.levelMeter} onChange={(event) => controlLevel(event.target.value)} type="range" id="volume" name="volume" min={0} max={3} step={0.2}>

      </input>
    </>
  );
}
