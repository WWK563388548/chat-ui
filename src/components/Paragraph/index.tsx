// @ts-nocheck
import React from 'react';
import { ParagraphContainer } from './style';

interface Props {
  children: any
  ellipsis: boolean
  type?: 'primary' | 'secondary' | 'danger'
  size?: 'large' | 'xlarge' | 'xxlarge' | 'small' | 'xsmall' | 'xxsmall' | 'normal' | 'medium'
}

const Paragraph: React.SFC<Props> = ({ children, ellipsis, ...rest }) => {
  return (
    <ParagraphContainer 
      as="p"  // TODO: need to fix this ts error
      ellipsis={ellipsis}
      {...rest}
    >
      { children }
    </ParagraphContainer>
  );
}

export default Paragraph;