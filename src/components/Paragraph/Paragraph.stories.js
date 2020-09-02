import React from 'react';
import Paragraph from '.';

export default {
  title: 'Basic UI/Paragraph',
  component: Paragraph,
}

export const Default = () => {
  return (
    <React.Fragment>
      <Paragraph>This is first paragraph</Paragraph>
      <Paragraph>This is second paragraph</Paragraph>
    </React.Fragment>
  );
}

export const Ellipsis = () => {
  return (
    <Paragraph ellipsis>
      This is second paragraphxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
    </Paragraph>
  );
}