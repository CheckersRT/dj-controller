import Image from "next/image";
import styles from "./KnobEq.module.css";
import styled from "styled-components";

export default function KnobEq({
  onClick,
  knobSlider,
  knobImage,
  onMouseMove,
  $knobAngle,
  mouseDown,
  onMouseDown,
  onMouseUp
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
            onMouseDown={() => onMouseDown()}
            onMouseMove={mouseDown ? (event) => onClick(event) : null}
            onMouseUp={onMouseUp}
            // onClick={(event) => onClick(event)}
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
      <input
        ref={knobSlider}
        type="range"
        min={-180}
        max={180}
        step={1}
      ></input>
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
