import React from "react";
import { EmojiComtainer } from "./style";

interface Props {
  children: any
  label: string
}

// <span role='img' aria-label='smirk'></span>
const Emoji: React.FC<Props> = ({ children, label, ...rest }) => {
  return (
    <EmojiComtainer role="img" aria-label={label} {...rest}>
      {children}
    </EmojiComtainer>
  );
}

export default Emoji;