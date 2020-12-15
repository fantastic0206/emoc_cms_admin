import React, { useState } from 'react'
import {
  TextField,
} from '@material-ui/core';
import ComponentsWrapper from '../ComponentsWrapper';
import { FormPaddingMarginContainer, Image, ValueContainer } from './styles.js';
import Margin from '../../../assets/images/margin.png';
import Padding from '../../../assets/images/padding.png';

const FormPaddingMargin = ({
  value = '',
  valueType = 'padding',
  onChange = (value) => {}
}) => {
  const [top, setTop] = useState(value ? value.split(',')[0] !== '0' ? value.split(',')[0] : '' : '' || '');
  const [left, setLeft] = useState(value ? value.split(',')[3] !== '0' ? value.split(',')[3] : '' : '' || '');
  const [bottom, setBottom] = useState(value ? value.split(',')[2] !== '0' ? value.split(',')[2] : '' : '' || '');
  const [right, setRight] = useState(value ? value.split(',')[1] !== '0' ? value.split(',')[1] : '' : '' || '');

  const mapValue = (value) => {
    return value !== '' ? value : 0;
  }

  const getChangedValue = (val1, val2, val3, val4) => {
    return `${mapValue(val1)},${mapValue(val2)},${mapValue(val3)},${mapValue(val4)}`;
  }

  const onChangeTop = (valueText) => {
    var value = valueText;
    setTop(valueText);
    onChange(getChangedValue(value, right, bottom, left));
  }
  const onChangeLeft = (valueText) => {
    var value = valueText;
    setLeft(valueText);
    onChange(getChangedValue(top, right, bottom, value));
  }
  const onChangeBottom = (valueText) => {
    var value = valueText;
    setBottom(valueText);
    onChange(getChangedValue(top, right, value, left));
  }
  const onChangeRight = (valueText) => {
    var value = valueText;
    setRight(valueText);
    onChange(getChangedValue(top, value, bottom, left));
  }
  return (
    <FormPaddingMarginContainer>
      {valueType === 'padding' ?
        <Image src={Padding} />
        :
        <Image src={Margin} />
      }
      <ValueContainer>
        <div className='desc'>
          <span>Top</span>
        </div>
        <TextField
          fullWidth
          variant='outlined'
          value={top}
          onChange={(event) => onChangeTop(event.target.value)}
        />
        <div className='desc'>
          <span>Bottom</span>
        </div>
        <TextField
          fullWidth
          variant='outlined'
          value={bottom}
          onChange={(event) => onChangeBottom(event.target.value)}
        />
        <div className='desc'>
          <span>Left</span>
        </div>
        <TextField
          fullWidth
          variant='outlined'
          value={left}
          onChange={(event) => onChangeLeft(event.target.value)}
        />
        <div className='desc'>
          <span>Right</span>
        </div>
        <TextField
          fullWidth
          variant='outlined'
          value={right}
          onChange={(event) => onChangeRight(event.target.value)}
        />
      </ValueContainer>
    </FormPaddingMarginContainer>
  )
}

export default ComponentsWrapper(FormPaddingMargin);
