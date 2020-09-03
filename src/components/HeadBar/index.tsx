import React from "react";
import { Actions, Head, HeadBarContainer } from "./style";

import face from '../../assets/images/kimmFace.png';

import Avatar from '../Avatar';
import Paragraph from '../Paragraph';
import Text from '../Text';
import { faPhoneAlt, faVideo, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeadBar = () => {
  return (
    <HeadBarContainer>
      <Avatar status="offline" imageSrc={face} />
      <Head>
        <Paragraph size="large">Kimm</Paragraph>
        <Paragraph type="secondary">
          <Text>offline</Text>
          <Text>· Last read: 3 hours ago</Text>
        </Paragraph>
      </Head>
      <Actions>
        <FontAwesomeIcon icon={faPhoneAlt} style={{ opacity: '0.3', fontSize: '24px', cursor: "pointer" }} />
        <FontAwesomeIcon icon={faVideo} style={{ opacity: '0.3', fontSize: '24px', cursor: "pointer" }} />
        <FontAwesomeIcon icon={faEllipsisH} style={{ opacity: '0.3', fontSize: '24px', cursor: "pointer" }} />
      </Actions>
    </HeadBarContainer>
  );
}

export default HeadBar;