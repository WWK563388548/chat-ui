import React from 'react';
import Icon from '.';

import {
  faCommentDots,
  faFolder,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactComponent as SmileIconSvg } from '../../assets/icons/smile.svg';
// import SmileIconSvg from '../../assets/icons/smile.svg';

/**
 * fontawesome 图标库安装命令
 * yarn add @fortawesome/react-fontawesome 
 * @fortawesome/fontawesome-svg-core 
 * @fortawesome/free-brands-svg-icons 
 * @fortawesome/free-regular-svg-icons 
 * @fortawesome/free-solid-svg-icons
*/

export default {
  title: 'Basic UI/Icon',
  component: Icon,
}

export const Default = () => {
  return <Icon IconComponent={SmileIconSvg} />;
}

export const CustomColor = () => {
  return <Icon IconComponent={SmileIconSvg} color='#cccccc' />;
}

// TODO: fix bug that is can not change path size
export const CustomSize = () => {
  return <Icon IconComponent={SmileIconSvg} width={24} height={24} color='#cccccc' />;
}

export const CustomOpacity = () => {
  return <Icon IconComponent={SmileIconSvg} opacity={0.7} />;
}

// 使用FontAwesome图标库
export const FontAwesome = () => {
  return <FontAwesomeIcon icon={faCommentDots} />;
};

export const FontAwesomeColor = () => {
  return <FontAwesomeIcon icon={faCommentDots} style={{ color: "#cccccc" }} />;
};

export const FontAwesomeSizes = () => {
  return (
    <div className='row-element'>
      <FontAwesomeIcon icon={faFolder} style={{ fontSize: "24px" }} />
      <FontAwesomeIcon icon={faStickyNote} style={{ fontSize: "36px" }} />
      <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "48px" }} />
    </div>
  );
};