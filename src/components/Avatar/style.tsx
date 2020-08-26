import styled, { css } from 'styled-components';

// 使用styled-components的css属性去复用一段css代码
const circleMixin = (color, size = '8px') => css`
  content: ''; /* ::before/after中设置content后才能显示 */
  display: block;
  position: absolute;
  width: ${size};
  height: ${size};
  border-radius: 50%;
  background: ${color};
`;

export const AvatarContainer = styled.div`
  position: relative;
`;

export const StatusIcon = styled.div<{ status: string, statusIconSize: string }>`
  position: absolute;
  left: 2px;
  top: 4px;

  /* 外部大圆圈 */
  &::before {
    ${({ statusIconSize }) => circleMixin('#fff', statusIconSize)}
    transform: scale(2); /* 放大两倍 */
  }
  
  /* 内部小圆圈 */
  &::after {
    ${({ theme, status, statusIconSize }) => {
      if(status === 'online'){
        return circleMixin(theme.green, statusIconSize)
      } else if(status === 'offline') {
        return circleMixin(theme.gray, statusIconSize)
      }
    }}
  }
`;

export const AvatarClip = styled.div<{ size: string }>`
  width: ${({size}) => size};
  height: ${({size}) => size};
  border-radius: 50%;
  overflow: hidden;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 等比例缩放图片 */
  object-position: center; /* 图片位置居中 */
`;