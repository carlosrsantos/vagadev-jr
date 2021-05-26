import styled from "styled-components";

export const Carousel = styled.div`
max-width: 100%;
height: 100%;
left: 0;
top: 0;
`;

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