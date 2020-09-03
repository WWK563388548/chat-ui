import React from 'react';
import { Filters, ActionContainer, FilterContainer } from './style';
import Text from '../Text';

const Filter = ({ children }) => {
  return <FilterContainer>{children}</FilterContainer>;
}

Filter.Filters = ({ children, label }) => (
  <Filters>
    <Text type="secondary">{label}: </Text>
    {children}
  </Filters>
);

Filter.Action = ({ children, label }) => (
  <ActionContainer>
    <Text type="secondary">{label}</Text>
    {children}
  </ActionContainer>
);

export default Filter;