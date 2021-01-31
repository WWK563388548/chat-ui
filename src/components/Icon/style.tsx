import styled from 'styled-components';

export const IconContainer = styled.div<{ color: string, opacity?: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* 为svg和svg下的所有子标签设置颜色和透明度 */
  svg,
  svg * {
    ${({ color }) => (color ? `fill: ${color}` : "")};
    ${({ opacity }) => (opacity ? `opacity: ${opacity}` : "")}
  }
`;