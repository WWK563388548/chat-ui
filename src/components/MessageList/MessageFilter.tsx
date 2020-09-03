
// @ts-nocheck
import React from 'react';
import Filter from '../Filter';
import Select from '../Select';
import Option from '../Option';
import Button from '../Button';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MessageFilter = () => {
  return (
    <Filter style={{ padding: "20px 0" }}>
      <Filter.Filters label="Filters">
        <Select>
          <Option>Newest messages</Option>
          <Option>Unread messages</Option>
        </Select>
      </Filter.Filters>

      <Filter.Action label="New Conversation">
        <Button>
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: '12px' }} />
        </Button>
      </Filter.Action>
    </Filter>
  );
}

export default MessageFilter;