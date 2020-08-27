import React from 'react';
import { IconContainer } from './style';

interface Props {
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>
  width: number
  height: number
  color: string
  opacity: number
}

// TODO: fix bug that is can not change path size
const Icon: React.SFC<Props> = ({ IconComponent, width = 48, height = 48, color, opacity }) => {
  console.log(IconComponent)
  return (
    <IconContainer color={color} opacity={opacity}>
      { IconComponent && <IconComponent width={width} height={height} viewBox={`0 0 ${width} ${height}`} /> }
    </IconContainer>
  );
}

export default Icon;