import React from 'react'
import {
  Switch,
} from '@material-ui/core';
import ComponentsWrapper from '../ComponentsWrapper';
import { FormSwitchContainer } from './styles.js';

const FormSwitch = ({
  value = 0,
  onChange = (value) => {}
}) => {
  return (
    <FormSwitchContainer>
      <Switch
        checked={value === '1'}
        onChange={(event) => onChange(event.target.checked ? 1 : 0)}
      />
    </FormSwitchContainer>
  )
}

export default ComponentsWrapper(FormSwitch);
