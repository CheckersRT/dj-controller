import styles from './TempoControl.module.css'

export default function TempoControl({onTempoChange}) {

    return (
        // <div className={styles.container}>
            <input min={-0.06} max={0.06} step={0.01} type="range" className={styles.tempoControl} onChange={(event) => onTempoChange(event.target.value)} ></input>
        // </div>
    )
}