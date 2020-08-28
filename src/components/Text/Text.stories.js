import React from 'react';
import Text from '.';
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export default {
  title: 'Basic UI/Text',
  component: Text,
}

export const Default = () => {
  return <Text>This is a primary content</Text>;
}

export const Secondary = () => {
  return <Text type='secondary'>This is a secondary content</Text>;
}

export const Danger = () => {
  return <Text type='danger'>This is a danger content</Text>;
}

export const MediumSize = () => {
  return <Text size='medium'>This is a medium content</Text>;
}

export const LargeAndBold = () => {
  return <Text size='large' bold>This is a large and bold content</Text>;
}