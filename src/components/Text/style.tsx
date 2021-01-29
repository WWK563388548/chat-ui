import styled, { css } from 'styled-components';

// 根据type值，有不同的变体
const typeVariants = {
  primary: css`
    color: ${({ theme }) => theme.grayDark};
  `,
  secondary: css`
    color: ${({ theme }) => theme.grayDark};
    opacity: 0.3;
  `,
  danger: css`
    color: ${({ theme }) => theme.red};
  `,
  white: css`
    color: ${({ theme }) => theme.white};
  `,
};

const sizeVariants = {
  normal: css`
    ${({ theme }) => theme.normal}
  `,
  medium: css`
    ${({ theme }) => theme.medium}
  `,
  large: css`
    ${({ theme }) => theme.large}
  `,
  xlarge: css`
    ${({ theme }) => theme.xlarge}
  `,
  xxlarge: css`
    ${({ theme }) => theme.xxlarge}
  `,
  small: css`
    ${({ theme }) => theme.small}
  `,
  xsmall: css`
    ${({ theme }) => theme.xsmall}
  `,
  xxsmall: css`
    ${({ theme }) => theme.xxsmall}
  `,
};

type Type = 'primary' | 'secondary' | 'danger' | 'white';
type Size = 'large' | 'xlarge' | 'xxlarge' | 'small' | 'xsmall' | 'xxsmall' | 'normal' | 'medium';

export const TextContainer = styled.span<{ size: Size, type: Type, bold: boolean }>`
  font-size: ${({ size }) => sizeVariants[size] || sizeVariants.normal};
  ${({ type }) => typeVariants[type]};
  ${({ bold }) => bold && `font-weight: 500`};
`;