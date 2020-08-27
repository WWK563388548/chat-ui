import styled, { css } from 'styled-components';

// 使用styled-components的css属性去复用一段css代码
export const circleMixin = (color, size = '8px') => css`
  width: ${size};
  height: ${size};
  border-radius: 50%;
  background: ${color};
`;