// @ts-nocheck
import React from 'react';
import { ChatBubbleWrapper, Bubble, BubbleTip, MessageText, Time } from './style';
import { ReactComponent as BubbleTipIcon } from '../../assets/icons/bubbleTip.svg';

// TODO: fix icon problem
const ChatBubble = ({ children, type, time, ...rest }) => {
  return (
    <ChatBubbleWrapper type={type} {...rest}>
      <Bubble>
        <BubbleTip IconComponent={BubbleTipIcon} width={40} height={28} color="white" />
        <MessageText className='message-text' type={type === 'mine' ? 'white' : 'primary'}>{ children }</MessageText>
      </Bubble>
      <Time>{time}</Time>
    </ChatBubbleWrapper>
  );
}


export default ChatBubble;