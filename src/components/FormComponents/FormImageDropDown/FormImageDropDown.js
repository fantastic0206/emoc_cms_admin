import React, { useState } from 'react'
import ComponentsWrapper from '../ComponentsWrapper';
import { FormImageDropDownContainer, SelectedImage } from './styles.js';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import centerLeftDesign from 'assets/images/menu-icons/menu-icon-logo-center-icon-left.svg';
import centerRightDesign from 'assets/images/menu-icons/menu-icon-logo-center-icon-right.svg';
import leftRightDesign from 'assets/images/menu-icons/menu-icon-logo-left-icon-right.svg';
import rightRightDesign from 'assets/images/menu-icons/menu-icon-logo-right-icon-right.svg';
import {
  Button,
  Menu,
  Grid,
} from '@material-ui/core';

const FormImageDropDown = ({
  value = '',
  onChange = () => {},
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState(value);

  const handleOpenDropDown = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDropDown = () => {
    setAnchorEl(null);
  };

  const onSelectDesign = (designValue) => {
    setSelectedDesign(designValue);
    setAnchorEl(null);
    onChange(designValue);
  };
  return (
    <FormImageDropDownContainer>
    { selectedDesign ?
      <>
        <SelectedImage 
          alt="menu-icon-logo-center-icon-left" 
          src={selectedDesign === "centerLeftDesign" ? centerLeftDesign : 
          selectedDesign === "centerRightDesign" ? centerRightDesign : 
          selectedDesign === "leftRightDesign" ? leftRightDesign : 
          rightRightDesign} />
        <div>
          <Button
            color="primary"
            variant="outlined"
            onClick={handleOpenDropDown}>
            Change Design
          </Button>
        </div>
      </>
      :
      <Button
        color="primary"
        variant="outlined"
        onClick={handleOpenDropDown}
        startIcon={<AddTwoToneIcon />}>
        Select Design
      </Button>
    }

    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleCloseDropDown}
      classes={{ list: 'p-0' }}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}>
      <div className="dropdown-menu-xl overflow-hidden p-0">
        <div className="grid-menu grid-menu-2col">
          <Grid container spacing={0}>
            <Grid item sm={12} style={{background: selectedDesign === "centerLeftDesign" ? '#bec6f3' : 'transparent'}}>
              <Button
                variant="text"
                className="btn-outline-secondary border-0 w-100 d-block btn-transition-none rounded-0 shadow-none py-4 px-1"
                onClick={(e) => onSelectDesign("centerLeftDesign")}>
                <img alt="menu-icon-logo-center-icon-left" src={centerLeftDesign} />
              </Button>
            </Grid>
            <Grid item sm={12} style={{background: selectedDesign === "centerRightDesign" ? '#bec6f3' : 'transparent'}}>
              <Button
                variant="text"
                className="btn-outline-secondary border-0 w-100 d-block btn-transition-none rounded-0 shadow-none py-4 px-1"
                onClick={(e) => onSelectDesign("centerRightDesign")}>
                <img alt="menu-icon-logo-center-icon-left" src={centerRightDesign} />
              </Button>
            </Grid>
            <Grid item sm={12} style={{background: selectedDesign === "leftRightDesign" ? '#bec6f3' : 'transparent'}}>
              <Button
                variant="text"
                className="btn-outline-secondary border-0 w-100 d-block btn-transition-none rounded-0 shadow-none py-4 px-1"
                onClick={(e) => onSelectDesign("leftRightDesign")}>
                <img alt="menu-icon-logo-center-icon-left" src={leftRightDesign} />
              </Button>
            </Grid>
            <Grid item sm={12} style={{background: selectedDesign === "rightRightDesign" ? '#bec6f3' : 'transparent'}}>
              <Button
                variant="text"
                className="btn-outline-secondary border-0 w-100 d-block btn-transition-none rounded-0 shadow-none py-4 px-1"
                onClick={(e) => onSelectDesign("rightRightDesign")}>
                <img alt="menu-icon-logo-center-icon-left" src={rightRightDesign} />
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </Menu>
    </FormImageDropDownContainer>
  )
}

export default ComponentsWrapper(FormImageDropDown);
