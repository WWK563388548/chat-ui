// @ts-nocheck
import React from 'react';
import { ChatBubbleWrapper, Bubble, BubbleTip, MessageText, Time } from './style';
import { ReactComponent as BubbleTipIcon } from '../../assets/icons/bubbleTip.svg';


const ChatBubble = ({ children, type, time, bubbleTipPosition, ...rest }) => {
  return (
    <ChatBubbleWrapper type={type} {...rest}>
      <Bubble>
        <BubbleTip IconComponent={BubbleTipIcon} bubbleTipPosition={bubbleTipPosition} width={40} height={28} color="white" />
        <MessageText className='message-text' type={type === 'mine' ? 'white' : 'primary'}>{ children }</MessageText>
      </Bubble>
      <Time>{time}</Time>
    </ChatBubbleWrapper>
  );
}

export default ChatBubble;