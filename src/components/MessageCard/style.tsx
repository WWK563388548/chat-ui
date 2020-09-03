import styled, { css } from 'styled-components';
import Paragraph from '../Paragraph';
import Badge from '../Badge';
import { AvatarContainer } from '../Avatar/style'; 
import { activeBarMixin } from '../../utils/mixins'; 

export const Name = styled.p`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.grayDark}; 
  grid-area: name;
`;

export const Time = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.grayDark};
  opacity: 0.3;
  grid-area: time;
  justify-self: end;
`;

export const Status = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.grayDark};
  opacity: 0.3;
  grid-area: status;
`;

export const MessageContainer = styled.div<{ replied: boolean }>`
  grid-area: message;
  display: grid;
  grid-template-columns: 1fr 30px;
  align-items: center;
  ${({ replied }) => replied && css`
      grid-template-columns: 24px 1fr 30px;
  `}
`;

export const MessageContent = styled(Paragraph).attrs({ ellipsis: true })``;

export const UnreadBadge = styled(Badge)`
  justify-self: end;
`;

export const MessageCardContainer = styled.div<{ active: boolean }>`
  display: grid;
  grid-template-areas:
    "avatar name time"
    "avatar status status"
    "message message message";
  grid-template-columns: 64px 1fr 1fr;
  row-gap: 16px;
  padding: 20px 30px;
  box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  background: ${({ theme }) => theme.white};
  transition: 0.4s;
  &:hover {
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
  }

  ${AvatarContainer} {
    grid-area: avatar;
  }

  ${({ active }) => active &&
    css`
      background: ${({ theme }) => theme.darkPurple};
      ${Name}, ${Status}, ${Time}, ${MessageContent} {
        color: white;
      }
      ${Status}, ${Time} {
        opacity: 0.4;
      }
      ${activeBarMixin({ barWidth: "4px", shadowWidth: "14px" })}

      /* 隐藏指示条露在外边的部分 */
      overflow: hidden;
    `}
`;