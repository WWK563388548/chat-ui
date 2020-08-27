import React from 'react';
import styled from 'styled-components';
import Navbar, { MenuItem } from '.';
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export default {
  title: 'Organisms UI/Navbar',
  component: Navbar,
}

const Container = styled.div`
  background: ${({theme}) => theme.darkPurple};
  width: 100px;
`;

export const Default = () => {
  return <Navbar>Navbar</Navbar>;
}

export const Menu = () => {
  return (
    <Container>
      <MenuItem showBadge active icon={faCommentDots} />
    </Container>
  );
}