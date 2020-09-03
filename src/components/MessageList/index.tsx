import React from 'react';
import Input from '../Input';
import MessageFilter from './MessageFilter';
import MessageCard from '../MessageCard';
import { StyledMessageList, MessageListContainer } from './style';
import face1 from '../../assets/images/kimmFace.png';

const MessageList = () => {
  return (
    <MessageListContainer>
      <Input.SearchBar placeholder='Search' />
      <MessageFilter />
      <StyledMessageList>
        {
          [1, 2, 3, 4, 5, 6].map((_, i) => (
            <MessageCard
              key={i}
              avatarSrc={face1}
              name="Kimm"
              avatarStatus={i === 2 ? "offline" : "online"}
              statusText={i === 2 ? "offline" : "online"}
              time="3 hours ago"
              message={i % 3 === 0 ? "Good job!" : "UserTag Pjt is done!"}
              unreadCount={3}
              active={i === 3}
              replied={i % 3 === 0}
            />
          ))
        }
      </StyledMessageList>
    </MessageListContainer>
  );
}

export default MessageList;