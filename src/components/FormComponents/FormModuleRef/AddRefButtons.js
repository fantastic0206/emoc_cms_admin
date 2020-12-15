import React from 'react'
import {
  Button,
} from '@material-ui/core';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import LinkTwoToneIcon from '@material-ui/icons/LinkTwoTone';
import { AddRefButtonsContainer } from './styles.js';

export default function AddRefButtons({
  handleClickNew = () => {},
  handleClickExist = () => {},
  linkHideButton = "show",
  createHideButton = "show",
}) {
  return (
    <AddRefButtonsContainer>
      <Button
        style={{'visibility': createHideButton}}
        color="primary"
        variant="outlined"
        onClick={handleClickNew}
        startIcon={<AddTwoToneIcon />}>
        Create new
      </Button>
      
      <Button
        style={{'visibility': linkHideButton}}
        color="primary"
        variant="outlined"
        onClick={handleClickExist}
        startIcon={<LinkTwoToneIcon />}>
        Link existing
      </Button>
    </AddRefButtonsContainer>
  )
}
