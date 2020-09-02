// @ts-nocheck
import React from 'react';
import { HeadingContainer } from './style';

interface Props {
  children: any
  level: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading: React.SFC<Props> = ({ children, level }) => {
  return (
    <HeadingContainer 
      as={`h${level}`}  // TODO: need to fix this ts error
    >
      { children }
    </HeadingContainer>
  );
}

export default Heading;