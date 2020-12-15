import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const DEFAULT_OPTIONS = {
  title: 'Are you sure?',
  message: '',
  buttons: [
    {
      label: 'Yes',
      onClick: () => alert('Click Yes'),
      props: { color: 'primary' }
    },
    {
      label: 'No',
      onClick: () => alert('Click No'),
      props: { color: 'primary' }
    }
  ],
};

const ConfirmDialog = ({isOpen, hide, options}) => {
  const dialogOption = options || DEFAULT_OPTIONS;
  console.log(isOpen);

  const title = dialogOption?.title;
  const message = dialogOption?.message;
  const buttons = dialogOption?.buttons;

  const handleClick = (onClick) => {
    hide();
    onClick();
  }

  return (
    <CustomDialog
      open={isOpen}
      onClose={false}
      maxWidth={"lg"}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {buttons.map((button) => (
          <Button onClick={() => handleClick(button.onClick)} color="primary" {...button.props}>
            {button.label}
          </Button>
        ))}
      </DialogActions>
    </CustomDialog>
  )
};

const ConfirmState = React.createContext(null);

export const ConfirmProvider = (props) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const confirm = (option) => {
    setOptions(option);
    setShowConfirm(true);
  };

  return (
    <ConfirmState.Provider
      value={confirm}
    >
      { props.children }
      <ConfirmDialog isOpen={showConfirm} hide={() => setShowConfirm(false)} options={options} />
    </ConfirmState.Provider>
  );
}

ConfirmProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useConfirm = function useConfirm() {
  var confirm = React.useContext(ConfirmState);
  return confirm;
};

const CustomDialog = styled(Dialog)`

`;