import styled from 'styled-components';
import Down from '../../assets/icons/caret_down.svg';

export const SelectContainer = styled.select`
  appearance: none; 
  background-image: url(${Down});
  background-repeat: no-repeat;
  background-position: right center;
  background-color: transparent;
  border: none;
  padding-right: 14px;
  font-size: ${({theme}) => theme.normal};
  color: ${({theme}) => theme.grayDark};

  ::-ms-expand {
    display: none;
  }
`;