import React from 'react';
import { ButtonContainer } from './style';

interface Props {
  children: any
  buttonType?: string
  shape?: 'circle' | 'rect'
  size?: string
  bgColor?: string
}

const Button: React.FC<Props> = ({ children, buttonType = 'primary', shape = 'circle', size = '30px', bgColor }) => {
  return (
    <ButtonContainer
      buttonType={buttonType}
      shape={shape}
      size={size}
      bgColor={bgColor}
    >
      { children }
    </ButtonContainer>
  );
}

export default Button;