import Image from "next/image";
import styles from "./KnobEq.module.css";
import styled from "styled-components";

export default function KnobEq({
  onTurn,
  knobImage,
  onMouseMove,
  $knobAngle,
  mouseDown,
  setMouseDown,
  name,
  knobId,
}) {


  
  return (
    <>
      <div
        className={styles.container}
        onMouseMove={(event) => onMouseMove(event)}
      >
        <div className={styles.knob}>
          <StyledButton
            angle={$knobAngle}
            onMouseDown={() => setMouseDown(true)}
            onMouseMove={mouseDown ? (event) => onTurn(event) : null}
            onMouseUp={() => setMouseDown(false)}
          >
            <Image
              id={name}
              draggable="false"
              ref={knobImage}
              src="/images/knob.svg"
              alt="knob svg image"
              width={62}
              height={62}
            />
          </StyledButton>
        </div>
      </div>
    </>
  );
}

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  transform: rotate(${(props) => knobId === name ? props.angle : null}deg);
`;

