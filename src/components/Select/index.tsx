
import React from "react";
import { SelectContainer } from "./style";

interface Props {
  children: any
}

const Select: React.SFC<Props> = ({ children }) => {
  return (
    <SelectContainer>
      {children}
    </SelectContainer>
  );
}

export default Select;