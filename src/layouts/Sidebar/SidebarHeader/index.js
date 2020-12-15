import React, { useContext } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tooltip } from '@material-ui/core';

import { NavLink } from 'react-router-dom';

import projectLogo from 'assets/images/emocean-logo-white.png';
import { GlobalState } from 'contexts/GlobalStateProvider';

const SidebarHeader = (props) => {

  const {sidebarToggle, setSidebarToggle, sidebarToggleMobile, setSidebarToggleMobile} = useContext(GlobalState);

  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };
  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  return (
    <>
      <div className="app-sidebar--header">
        <div className="app-sidebar-logo">
          <NavLink
            to="/"
            title="Bamburgh React Admin Dashboard with Material-UI PRO"
            className="app-sidebar-logo">
            <div className="app-sidebar-logo--icon">
              <img
                alt="Bamburgh React Admin Dashboard with Material-UI PRO"
                src={projectLogo}
              />
            </div>
            {false && 
            <div className="app-sidebar-logo--text">
              <span>General</span>

              <b>bamburgh</b>
            </div>
            }
          </NavLink>
        </div>
        <Tooltip title="Collapse sidebar" placement="right" arrow>
          <Button
            onClick={() => toggleSidebar()}
            className="btn btn-sm collapse-sidebar-btn">
            <FontAwesomeIcon icon={['far', 'dot-circle']} size="lg" />
          </Button>
        </Tooltip>
        <Button
          className={clsx(
            'navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn',
            { 'is-active': sidebarToggleMobile }
          )}
          onClick={toggleSidebarMobile}>
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </Button>
        <Tooltip title="Expand sidebar" placement="right" arrow>
          <Button
            onClick={() => toggleSidebar()}
            className="expand-sidebar-btn btn btn-sm">
            <FontAwesomeIcon icon={['fas', 'arrows-alt-h']} />
          </Button>
        </Tooltip>
      </div>
    </>
  );
};

export default SidebarHeader;
