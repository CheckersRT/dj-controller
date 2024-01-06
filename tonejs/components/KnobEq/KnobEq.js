import Image from "next/image";
import styles from "./KnobEq.module.css";
import styled from "styled-components";

export default function KnobEq({
  onTurn,
  knobImage,
  onMouseMove,
  $knobAngle,
  mouseDown,
  onMouseDown,
  onMouseUp,
  setMouseDown
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

// when mousedown and mousemove on Image, calculate angles etc.
//convert angles into slider position
//move slider
//event.target.value = slider position

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  transform: rotate(${(props) => props.angle}deg);
`;

// const StyledDiv = styled.div`
//   &::before {
//     transform: rotate(${(props) => props.rotation * 100}deg);
//   }
// `;
