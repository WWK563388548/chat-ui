import React from 'react';
import Badge from '.';
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  title: 'Basic UI/Badge',
  component: Badge,
}

export const Default = () => {
  return <Badge count={5} />;
}

export const DotVariant = () => {
  return (
    <Badge show variant='dot'>
      <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: '24px' }} />
    </Badge>
  );
}
