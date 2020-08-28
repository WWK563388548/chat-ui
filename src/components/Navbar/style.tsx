import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { activeBarMixin } from '../../utils/mixins';
import { 
  AvatarContainer,
  StatusIcon,
} from '../Avatar/style';

export const MenuItemWrapper = styled.div<{ active: boolean | undefined }>`
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

export const MenuIcon = styled(FontAwesomeIcon)<{ active: boolean | undefined }>`
  color: #fff;
  font-size: 24px;
  opacity: ${({active}) => (active ? 1 : 0.3)}
`;

export const NavbarContainer = styled.nav`
  display: grid;
  grid-template-rows: 1fr 4fr;
  width: 100px;
  height: 100vh;
  background-color: ${({ theme }) => theme.darkPurple};
  padding: 30px 0;

  ${AvatarContainer} {
    justify-self: center;
    ${StatusIcon} {
      &::before {
        background-color: ${({ theme }) => theme.darkPurple};
      }
    }
  }
`;

export const MenuItemsWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;
`;


