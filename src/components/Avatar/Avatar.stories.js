import React from 'react';
import Avatar from '.';
import Image from '../../assets/images/image.png';
import '../../story.css';

export default {
  title: 'Basic UI/Avatar',
  component: Avatar,
}

export const Default = () => {
  return <Avatar imageSrc={Image} />;
}

export const Sizes = () => {
  return (
    <div className='row-element'>
      <Avatar imageSrc={Image} />
      <Avatar imageSrc={Image} size='56px' />
      <Avatar imageSrc={Image} size='64px' />
      <Avatar imageSrc={Image} size='72px' />
    </div>
  )
}

export const withStatus = () => {
  return (
    <div className='row-element'>
      <Avatar imageSrc={Image} status='online' />
      <Avatar imageSrc={Image} status='offline' />
      <Avatar imageSrc={Image} size='72px' status='offline' statusIconSize='12px' />
    </div>
  )
}