import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { activeBarMixin } from '../../utils/mixins';

export const MenuItemWrapper = styled.div<{ active: boolean }>`
  & > a {
    width: 100%;
    height: 74px;

    display: flex;
    align-items: center;
    justify-content: center;

    ${activeBarMixin()}
    ${({active}) => (active ? '' : '&::before, &::after { height: 0; }')}
  }
`;

export const MenuIcon = styled(FontAwesomeIcon)<{ active: boolean }>`
  color: #fff;
  font-size: 24px;
  opacity: ${({active}) => (active ? 1 : 0.3)}
`;

