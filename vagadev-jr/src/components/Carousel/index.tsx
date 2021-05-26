import { useEffect, useRef, useState } from "react";
import banner01 from '../../assets/img/principal_banner_desktop.jpg';
import banner02 from '../../assets/img/principal_banner_desktop_02.jpg';

import { Buttons} from '../Buttons';

import { Slide } from './styles';

export function Carousel() {

  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  const images = [
    banner01,
    banner02
  ];

  const handleClickPrev = () => { 
    if (index === 0) return;
    setIndex(index - 1);
    setXPosition(xPosition + width);
  };
  const handleClickNext = () => {
    if (index === images.length - 1) {
      setIndex(0);
      setXPosition(0);
    } else {
      setIndex(index + 1);
      setXPosition(xPosition - width);
    }
  };

  const slideRef = useRef(0);
  
  useEffect(() => {
    if (slideRef.current) {
      const width = slideRef.current;
      setWidth(width);
    }
  }, [setWidth]);

  return (
    <>
      <Slide xPosition={xPosition} ref={slideRef}>
        {images.map((img, i) => (
          <img src={img} alt='Banner' key={i} />
        ))}
      </Slide>
      <Buttons
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
      />
   </>
  );

}
