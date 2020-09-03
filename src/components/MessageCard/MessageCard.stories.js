import React from 'react';
import MessageCard from '.';
import face1 from '../../assets/images/kimmFace.png';

export default {
  title: 'Organisms UI/MessageCard',
  component: MessageCard,
}

export const Default = () => (
  <MessageCard
    avatarSrc={face1}
    name="Kimm"
    avatarStatus="online"
    statusText="online"
    time="3 hours ago"
    message="UserTag Pjt is done!"
    unreadCount={3}
  />
);

export const Offline = () => (
  <MessageCard
    avatarSrc={face1}
    name="Kimm"
    avatarStatus="offline"
    statusText="offline"
    time="3 hours ago"
    message="UserTag Pjt is done!"
    unreadCount={3}
  />
);

export const Active = () => (
  <MessageCard
    avatarSrc={face1}
    name="Kimm"
    avatarStatus="online"
    statusText="online"
    time="3 hours ago"
    message="UserTag Pjt is done!"
    unreadCount={3}
    active
  />
);

export const Replied = () => (
  <MessageCard
    avatarSrc={face1}
    name="Kimm"
    avatarStatus="online"
    statusText="online"
    time="3 hours ago"
    message="UserTag Pjt is done!"
    unreadCount={3}
    active
    replied
  />
);

export const RepliedInactive = () => (
  <MessageCard
    avatarSrc={face1}
    name="Kimm"
    avatarStatus="online"
    statusText="online"
    time="3 hours ago"
    message="UserTag Pjt is done!"
    unreadCount={3}
    replied
  />
);