import styled from 'styled-components';
import { TextContainer } from '../Text/style';

export const Filters = styled.div``;

export const ActionContainer = styled.div`
  justify-self: end;
  ${TextContainer} {
    padding-right: 1rem;
  }
`;

export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`;