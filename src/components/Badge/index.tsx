import React from 'react';
import { BadgeWrapper, Count } from './style'; 

interface Props {
  children?: React.ReactChild
  show: boolean | undefined
  count?: number
  showZero?: boolean
}

const Badge: React.SFC<Props> = ({ children, show = false, count = 0, showZero = false }) => {
  // variant 用于表示组件的变体
  return (
    <BadgeWrapper variant={children ? 'dot' : 'default'} show={show} count={count} showZero={showZero} >
      {children || <Count>{count}</Count>}
    </BadgeWrapper>
  );
}

export default Badge;