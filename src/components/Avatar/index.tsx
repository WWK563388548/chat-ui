import React from 'react';
import { 
  AvatarContainer,
  StatusIcon,
  AvatarClip,
  AvatarImage 
} from './style';

interface Props {
  imageSrc: string
  size?: string
  status: string
  statusIconSize?: string
}

const Avatar: React.SFC<Props> = ({ imageSrc, size = '48px', status, statusIconSize = '8px' }) => {
  return (
    <AvatarContainer>
      { status && <StatusIcon status={status} statusIconSize={statusIconSize} />}
      <AvatarClip size={size}>
        <AvatarImage src={imageSrc} alt="a image" />
      </AvatarClip>
    </AvatarContainer>
  );
}

export default Avatar;
