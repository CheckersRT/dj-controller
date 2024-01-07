import styles from "./JogWheel.module.css";
import styled from "styled-components";

export default function JockyWheel({ onTurn, $rotation }) {
  return (
    <StyledDiv className={styles.container} rotation={$rotation}>
      <input
        className={styles.jockyWheel}
        type="range"
        min={-1}
        max={1}
        step={0.1}
        onChange={(event) => {
          onTurn(event.target.value);
        }}
        onMouseUp={(event) => (event.target.value = 0)}
      ></input>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  &::before {
    transform: rotate(${(props) => props.rotation * 100}deg);
  }
`;
