import React from 'react';
import Heading from '.';

export default {
  title: 'Basic UI/Heading',
  component: Heading,
}

export const H1 = () => {
  return (
    <Heading level={1}>Level 1 heading</Heading>
  );
}

export const H2 = () => {
  return (
    <Heading level={2}>Level 2 heading</Heading>
  );
}

export const H3 = () => {
  return (
    <Heading level={3}>Level 3 heading</Heading>
  );
}

export const H4 = () => {
  return (
    <Heading level={4}>Level 4 heading</Heading>
  );
}

export const H5 = () => {
  return (
    <Heading level={5}>Level 5 heading</Heading>
  );
}

export const H6 = () => {
  return (
    <Heading level={6}>Level 6 heading</Heading>
  );
}