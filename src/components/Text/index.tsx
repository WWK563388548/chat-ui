// @ts-nocheck
// This Text component is for showing inline content
import React from 'react';
import { TextContainer } from './style';

interface TextProps {
  children?: any
  type?: 'primary' | 'secondary' | 'danger' | 'white'
  size?: 'large' | 'xlarge' | 'xxlarge' | 'small' | 'xsmall' | 'xxsmall' | 'normal' | 'medium'
  bold?: boolean
}

const Text: React.SFC<TextProps> = ({ children, type = 'primary', size = 'normal', bold }) => {
  return (
    <TextContainer type={type} size={size} bold={bold}>
      { children }
    </TextContainer>
  );
}

export default Text;