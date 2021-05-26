import styled from "styled-components";

interface ButtonProps {
  side: 'prev' | 'next';
}


export const Button = styled.img<ButtonProps>`
  position: absolute;
  top: 50%;
  z-index: 10;
  cursor: pointer;
  font-size: 15px;
  transform: translateY(-50%);
  left: ${props => props.side === 'prev' && 10}px;
  right: ${props => props.side === 'next' && 10}px;
`;