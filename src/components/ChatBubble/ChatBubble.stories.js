import React from "react";
import ChatBubble from ".";

export default {
  title: "Basic UI/ChatBubble",
  component: ChatBubble,
  decorators: [(storyFn) => <div style={{ padding: "24px" }}>{storyFn()}</div>],
};

export const FromOthers = () => (
  <ChatBubble time="yesterday 14:26 PM">This is a message from other people</ChatBubble>
);

export const Mine = () => (
  <ChatBubble type="mine" time="yesterday 16:30 PM">
    My message
  </ChatBubble>
);