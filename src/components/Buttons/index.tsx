import leftBtn from '../../assets/svgs/angle-left-solid.svg'; // Svg Icon
import rightBtn from '../../assets/svgs/angle-right-solid.svg';
import { Button } from './styles';

interface ButtonsProps {
  handleClickPrev: () => void;
  handleClickNext: () => void;
}

export function Buttons({ handleClickPrev, handleClickNext }: ButtonsProps) {
  return (
    <>
      <Button src={leftBtn} side="prev" onClick={handleClickPrev} />
      <Button src={rightBtn} side="next" onClick={handleClickNext} />
    </>
  );
}