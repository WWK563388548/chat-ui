// @ts-nocheck
import React from 'react';
import { useTheme } from "styled-components";
import { VoiceChatBubbleWrapper } from './style';
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg';
import { ReactComponent as WaveIcon } from '../../assets/icons/wave.svg';
import Button from "../Button";
import Icon from "../Icon";
import Text from "../Text";

const VoiceChatBubble = ({ children, type, time, ...rest }) => {
    const theme = useTheme();
    return (
      <VoiceChatBubbleWrapper type={type} {...rest}>
        <Button size="40px">
          <Icon
            IconComponent={PlayIcon}
            color="white"
            width="14"
            height="16"
            style={{ transform: "translateX(1px)" }}
          />
        </Button>
        <Icon IconComponent={WaveIcon} width="100%" height="30" color={theme.primaryColor} />
        <Text bold>{time}</Text>
      </VoiceChatBubbleWrapper>
    );
}


export default VoiceChatBubble;