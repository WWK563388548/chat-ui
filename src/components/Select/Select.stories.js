import React from 'react';
import Select from '.';
import Option from '../Option';

export default {
  title: 'Basic UI/Select',
  component: Select,
}

export const Default = () => {
  return (
    <Select>
      <Option>first option</Option>
      <Option>second option</Option>
    </Select>
  );
}