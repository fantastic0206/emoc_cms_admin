import React, { useState } from 'react'
import ComponentsWrapper from '../ComponentsWrapper';
import { Switch } from '@material-ui/core';
import { FormToogleContainer } from './styles.js';

const FormToogle = ({
  options = [],
  value = '',
  onChange = () => {},
}) => {
  const [currentValue, setCurrentValue] = useState(value || 'text');
  const handleChange = (event) => {
    if (event.target.checked === true) {
      setCurrentValue(options[0].value);
      onChange(options[0].value);
    }
    else {
      setCurrentValue(options[1].value);
      onChange(options[1].value);
    }
  };
  return (
    <FormToogleContainer>
      <div className='components-wrapper--title'>
        <span>{currentValue === options[0].value ? options[0].label : options[1].label}</span>
      </div>
      <Switch
        onChange={handleChange}
        checked={currentValue === 'image'}
        name="type"
        color="primary"
        className="switch-medium"
      />
    </FormToogleContainer>
  )
};

export default ComponentsWrapper(FormToogle);
