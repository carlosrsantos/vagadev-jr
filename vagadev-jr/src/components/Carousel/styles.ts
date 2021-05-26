import styled from "styled-components";

export const Carousel = styled.div`
max-width: 1920px;
height: 840px;

left: 0;
top: 0;

`;

/* export const Wrapper = styled.div`
  position: relative;
  width: 55%;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
`; */

interface SlideProps{
  xPosition: number;
  ref: any;
}

export const Slide = styled.div<SlideProps>`
  display: flex;
  max-width: 1920px;
  height: 840px;
  transition: transform 0.6s ease-in-out;
  transform: ${props => `translateX(${props.xPosition}px)`}; // (*)
  img {
    width: 1920px;
    height: 840px;
  }
`;