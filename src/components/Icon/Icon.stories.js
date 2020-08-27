import React from 'react';
import Icon from '.';
import SmileIconSvg from '../../assets/icons/smile.svg';
import '../../story.css';

export default {
  title: 'Basic UI/Icon',
  component: Icon,
}

export const Default = () => {
  return <Icon IconComponent={SmileIconSvg} />;
}

export const CustomColor = () => {
  return <Icon IconComponent={SmileIconSvg} color='#cccccc' />;
}

// TODO: fix bug that is can not change path size
export const CustomSize = () => {
  return <Icon IconComponent={SmileIconSvg} width={48} height={48} color='#cccccc' />;
}

export const CustomOpacity = () => {
  return <Icon IconComponent={SmileIconSvg} opacity={0.7} />;
}