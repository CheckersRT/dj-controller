import styles from "./JockyWheel.module.css"

export default function JockyWheel({onTurn}) {
    return (
        <div className={styles.container}>
            <input type="range" min={-1} max={1} step={0.1} onChange={(event) => onTurn(event.target.value)} onMouseUp={(event) => event.target.value = 0}></input>
            {/* <button onClick={(event) => onTurn(event)}>Seek+</button> */}
        </div>
    )
}