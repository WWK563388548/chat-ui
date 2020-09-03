import React from "react";
import { OptionContainer } from "./style";

interface Props {
  children: any
}

const Option: React.SFC<Props> = ({ children }) => {
  return (
    <OptionContainer>
      {children}
    </OptionContainer>
  );
}

export default Option;