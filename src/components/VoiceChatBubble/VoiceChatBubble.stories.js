import React from "react";
import VoiceChatBubble from ".";
import ChatBubble from '../ChatBubble';

export default {
  title: "Basic UI/VoiceChatBubble",
  component: VoiceChatBubble,
  decorators: [(storyFn) => <div style={{ padding: "24px" }}>{storyFn()}</div>],
};

export const Default = () => <VoiceChatBubble time="01:25" />;

export const FromOthers = () => (
  <ChatBubble bubbleTipPosition='-20%' time="yesterday 14:26 PM">
    <VoiceChatBubble time="01:25" />
  </ChatBubble>
);

export const Mine = () => (
  <ChatBubble bubbleTipPosition='-20%' type="mine" time="yesterday 16:30 PM">
    <VoiceChatBubble type='mine' time="02:25" />
  </ChatBubble>
);