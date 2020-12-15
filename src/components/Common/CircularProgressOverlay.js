import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  root: {
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    background: '#11111188',
    opacity: 1,
    zIndex: 100000,
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center,'
  },
}));

const CircularProgressOverlay = ({
  active = false,
  text = 'Processing ...'
}) => {
  const classes = useStyles();
  if (!active) return null;
  return (
    <div className={classes.root}>
      <OverlayContainer>
        <CircularProgress size={25} style={{ color: 'white' }} />
        <span className="circular-progress-overlay--text">{text}</span>
      </OverlayContainer>
    </div>
  )
}

export default CircularProgressOverlay;

const OverlayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 60px;

  .circular-progress-overlay--text {
    font-size: 25px;
    color: white;
    margin-left: 10px;
  }
`;