import styled, { css } from 'styled-components';
import { TextContainer } from '../Text/style';

export const ParagraphContainer = styled(TextContainer)<{ ellipsis: boolean}>`
  ${({ellipsis}) => 
    ellipsis &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `
  }
`;