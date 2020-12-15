import React from 'react'
import {
  TextField,
  MenuItem,
} from '@material-ui/core';
import ComponentsWrapper from '../ComponentsWrapper';
import { FormSelectContainer } from './styles.js';

const FormSelect = ({
  options = [],
  value = '',
  onChange = () => {},
}) => {
  return (
    <FormSelectContainer>
      <TextField
        fullWidth
        variant='outlined'
        select
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((_option) => (
          <MenuItem key={_option.value} value={_option.value}>
            {_option.label}
          </MenuItem>
        ))}
      </TextField>
    </FormSelectContainer>
  )
};

export default ComponentsWrapper(FormSelect);
