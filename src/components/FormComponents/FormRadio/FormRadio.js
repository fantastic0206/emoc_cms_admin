import React from 'react'
import ComponentsWrapper from '../ComponentsWrapper';
import { FormRadioContainer, FormRadioImg } from './styles.js';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Icon from '@material-ui/core/Icon';

const FormRadio = ({
  options = [],
  value = '',
  multiSelect = true,
  onChange = () => {},
}) => {
  const [values, setValue] = React.useState(() => value ? value.split(',') : '');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const value = newValue ? newValue.toString() : '';
    onChange(value);
  };
  return (
    <FormRadioContainer>
      <ToggleButtonGroup
        value={values}
        exclusive={!multiSelect}
        onChange={handleChange}
      >
        {options.map((_option) => (
          <ToggleButton key={_option.value} value={_option.value} aria-label={_option.value}>
            <Icon>{_option.resource}</Icon>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </FormRadioContainer>
  )
}

export default ComponentsWrapper(FormRadio);
