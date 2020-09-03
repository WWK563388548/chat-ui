// @ts-nocheck
import React from 'react';
import Avatar from '../Avatar';
import { 
  Name, 
  Time,
  Status,
  MessageContainer,
  MessageContent,
  UnreadBadge,
  MessageCardContainer,
} from './style';
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from 'styled-components';

interface Props {
  avatarSrc: string
  avatarStatus: string
  statusText: string
  name: string
  time: string
  message: string
  unreadCount: number
  active?: boolean
  replied?: boolean
  children?: any;
}

const MessageCard: React.SFC<Props> = ({ 
  avatarSrc,
  avatarStatus,
  statusText,
  name,
  time,
  message,
  unreadCount,
  active,
  replied,
  children,
}) => {
  const theme = useTheme();
  return (
    <MessageCardContainer active={active}>
      <Avatar imageSrc={avatarSrc} status={avatarStatus} />
      <Name>{ name }</Name>
      <Time>{ time }</Time>
      <Status>{ statusText }</Status>
      <MessageContainer replied={replied}>
        {replied && (
          <FontAwesomeIcon 
            icon={faReply} 
            style={{ 
              fontSize: '14px',
              color: `${ active ? theme.white : theme.inactiveColor }`,
              opacity: `${ active ? 0.4 : 1 }`,
              justifyContent: 'start'
            }} 
          />
        )}
        <MessageContent>{ message }</MessageContent>
        <UnreadBadge count={unreadCount} />
      </MessageContainer>
    </MessageCardContainer>
  );
}

export default MessageCard;