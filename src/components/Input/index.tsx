import React from 'react';
import { 
  InputWrapper,
  Prefix,
  Suffix,
  InputContainer,
 } from './style';
 import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from 'styled-components';

interface Props {
  placeholder: string
  prefix?: any
  suffix?: any
}

const Input = ({ placeholder = 'Please Input something', prefix, suffix }: Props) => {
  return (
    <InputContainer>
      { prefix && <Prefix>{prefix}</Prefix> }
      <InputWrapper placeholder={placeholder} />
      { suffix && <Suffix>{suffix}</Suffix> }
    </InputContainer>
  );
};

interface SearchBarProps {
  placeholder: string
  prefix?: any
  suffix?: any
}

const SearchBar: React.SFC<SearchBarProps> = ({ placeholder = 'Please enter search content', ...rest }) => {
  const theme: any = useTheme();
  return (
    <Input 
      placeholder={placeholder} 
      prefix={<FontAwesomeIcon icon={faSearch} style={{ color: `${theme.gray3}`, fontSize: "18px" }} />}
      {...rest}  // 若props名字相同的情况下, rest中的props将覆盖前面的props
    />
  );
};

Input.SearchBar = SearchBar;

export default Input;