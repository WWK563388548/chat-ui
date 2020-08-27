import styled, { css } from 'styled-components';
import { circleMixin } from '../../utils/mixins';

const variants = {
  // 显示红点
  dot: css`
    position: relative;
    padding: 5px;
    &::after {
      display: ${({show}: any) => (show ? 'block' : 'none')};
      content: '';
      ${({theme}) => circleMixin(theme.red, '6px')};
      position: absolute;
      right: 0;
      top: 0;
    }
  `,
  // 显示未读数
  default: css`
    ${({theme}) => circleMixin(theme.red, '26px')};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0.04),
      0px 6px 12px 0px rgba(0, 0, 0, 0.08);
    ${({showZero, count}: any) => (!showZero && count === 0 && 'visibility: hidden')};
  `,
};

export const Count = styled.div`
  font-size: ${({theme}) => theme.normal};
  color: #fff;
`;

export const BadgeWrapper = styled.div<{ show: boolean, count: number, showZero: boolean, variant: string }>`
  display: inline-block;
  ${({variant}) => variants[variant]};
`;