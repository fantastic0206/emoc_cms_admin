import React from 'react';

import clsx from 'clsx';

import { List, ListItem } from '@material-ui/core';

import { NavLink } from 'react-router-dom';

const Footer = (props) => {
  return (
    <>
      <div
        className={clsx('app-footer text-black-50', {
          'app-footer--shadow': false,
          'app-footer--opacity-bg': true
        })}>
        <div className="app-footer--first">
         
        </div>
        <div className="app-footer--second">
          <span>Emocean Studios Pty Ltd</span> © 2020 - <span className="text-danger px-1">❤</span> Website Design Parramatta
        </div>
      </div>
    </>
  );
};

export default Footer;
