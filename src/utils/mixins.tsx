import styled, { css } from 'styled-components';

// 使用styled-components的css属性去复用一段css代码
export const circleMixin = (color, size = '8px') => css`
  width: ${size};
  height: ${size};
  border-radius: 50%;
  background: ${color};
`;

export const activeBarMixin = ({ barWidth = '8px', shadowWidth = '20px' } = {}) => css`
  position: relative;

  /* 移动到容器的最左边 */
  &::before, &::after {
    display: block;
    content: '';
    position: absolute;
    height: 100%;
    left: 0;
  }

  &::before { /* 高亮部分 */
    width: ${barWidth}; 
    background: linear-gradient(
      180deg,
      rgba(142, 197, 242, 1) 0%,
      rgba(79, 157, 222, 1) 100%
    );
  }

  &::after { /* 阴影部分 */
    width: ${shadowWidth}; 
    background: linear-gradient(
      270deg,
      rgba(41, 47, 76, 1) 0%,
      rgba(142, 197, 242, 1) 100%
    );
    opacity: 0.6;
  }
`;