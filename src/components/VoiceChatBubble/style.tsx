import styled, { css } from "styled-components";
import { ButtonContainer } from "../Button/style";
import { IconContainer } from "../Icon/style";
import { TextContainer } from "../Text/style";

const typeVariants = {
  mine: css`
    ${ButtonContainer} {
      background-color: white;

      ${IconContainer} path {
        fill: ${({ theme }) => theme.primaryColor};
      }
    }
    & > ${IconContainer} path {
      fill: white;
    }

    & > ${TextContainer} {
      color: white;
    }
  `,
};

export const VoiceChatBubbleWrapper = styled.div<{ type?: string }>`
  display: flex;
  align-items: center;

  & > *:first-child {
    flex-shrink: 0;
  }

  & > *:not(:first-child) {
    margin-left: 16px;
  }

  ${({ type }) => type && typeVariants[type]}
`;