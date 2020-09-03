import React from 'react';
import Filter from '.';
import Select from '../Select';
import Option from '../Option';
import Button from '../Button';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  title: 'Organisms UI/Filter',
  component: Filter,
}

export const Default = () => (
  <Filter>
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