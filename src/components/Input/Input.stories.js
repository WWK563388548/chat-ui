import React from 'react';
import Input from '.';

import {
  faCommentDots,
  faFolder,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default {
  title: 'Basic UI/Input',
  component: Input,
}

export const Default = () => {
  return <Input />;
}

export const SearchBar = () => {
  return <Input.SearchBar />;
}

// 由于有{...rest}，所以相同的属性时，可以覆盖掉旧的属性
export const CustomSearchBar = () => {
  return (
    <Input.SearchBar 
      placeholder='aaaa' 
      prefix={<FontAwesomeIcon icon={faStickyNote} style={{ color: `#cccccc`, fontSize: "18px" }} />} 
      suffix={<FontAwesomeIcon icon={faCommentDots} style={{ color: `#cccccc`, fontSize: "18px" }} />}
    />
  );
}