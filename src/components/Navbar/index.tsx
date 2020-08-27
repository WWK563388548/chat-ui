import React from 'react';
import { 
  MenuItemWrapper,
  MenuIcon,
} from './style';
import Badge from '../Badge';

interface Props {
 
}

export const MenuItem = ({ icon, active, showBadge, ...rest }) => {
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

const Navbar: React.SFC<Props> = () => {
  return (
    <div>
    </div>
  );
}

export default Navbar;