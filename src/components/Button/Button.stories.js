import React from 'react';
import Button from '.';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  title: 'Basic UI/Button',
  component: Button,
}

export const RectButton = () => {
  return (
    <Button shape='rect'>RectButton</Button>
  );
}

export const CircleButton = () => {
  return (
    <Button shape='circle'>
      <FontAwesomeIcon icon={faPlus} style={{ fontSize: '12px' }} />
    </Button>
  );
}