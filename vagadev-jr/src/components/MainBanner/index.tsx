import { useState } from "react";
import { Header } from "../Header";
import { Container } from "./styles";


export function MainBanner(){
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);

  const images = [  ];

  const handleClickPrev = () => { 
      if (index === 0) return;
      setIndex(index - 1);
      setXPosition(xPosition + width);
    };

  const handleClicknext = () => {
      if (index === images.length - 1) {
        setIndex(0);
        setXPosition(0);
      } else {
        setIndex(index + 1);
        setXPosition(xPosition - width);
      }
    };

  return(
    <>
    <Container>
      <Header />
      
    </Container>
    </>
  )
}