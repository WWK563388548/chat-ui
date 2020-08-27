import React from 'react';
import { 
  MenuItemWrapper,
  MenuIcon,
  MenuItemsWrapper,
  NavbarContainer,
} from './style';
import Badge from '../Badge';
import Avatar from '../Avatar';
import { 
  faCommentDots, 
  faUsers, 
  faFolder, 
  faStickyNote, 
  faEllipsisH, 
  faCog 
} from "@fortawesome/free-solid-svg-icons";
import Image from '../../assets/images/image.png';

interface MenuItemProps {
  icon: any
  active?: boolean
  showBadge?: boolean
}

export const MenuItem: React.SFC<MenuItemProps> = ({ icon, active, showBadge, ...rest }) => {
  return (
    <MenuItemWrapper active={active} {...rest}>
      <a href='#'>
        <Badge show={showBadge}>
          <MenuIcon active={active} icon={icon} />
        </Badge>
      </a>
    </MenuItemWrapper>
  )
}

const Navbar = () => {
  return (
    <NavbarContainer>
      <Avatar imageSrc={Image} status='online' />
      <MenuItemsWrapper>
        <MenuItem showBadge active icon={faCommentDots} />
        <MenuItem icon={faUsers} />
        <MenuItem icon={faFolder} />
        <MenuItem icon={faStickyNote} />
        <MenuItem icon={faEllipsisH} />
        <MenuItem icon={faCog} />
      </MenuItemsWrapper>
    </NavbarContainer>
  );
}

export default Navbar;