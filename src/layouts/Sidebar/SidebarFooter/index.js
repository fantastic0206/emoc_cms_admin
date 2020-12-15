import React from 'react';

import { Button, Tooltip } from '@material-ui/core';

import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import LinkedCameraTwoToneIcon from '@material-ui/icons/LinkedCameraTwoTone';
import MarkunreadTwoToneIcon from '@material-ui/icons/MarkunreadTwoTone';

const SidebarFooter = () => {
  return (
    <>
      <div className="app-sidebar--footer">
        <ul>
          <li>
            <Tooltip arrow placement="top" title="Analytics Dashboard">
              <Button
                variant="text"
                className="btn-transition-none d-40 mx-2 p-0">
                <ListAltTwoToneIcon />
              </Button>
            </Tooltip>
          </li>
          <li>
            <Tooltip arrow placement="top" title="Crypto Components">
              <Button
                variant="text"
                className="btn-transition-none d-40 mx-2 p-0">
                <MarkunreadTwoToneIcon />
              </Button>
            </Tooltip>
          </li>
          <li>
            <Tooltip arrow placement="top" title="Buttons">
              <Button
                variant="text"
                className="btn-transition-none d-40 mx-2 p-0">
                <LinkedCameraTwoToneIcon />
              </Button>
            </Tooltip>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarFooter;
