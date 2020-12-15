/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import queryString from 'query-string';

import {
  Drawer,
} from '@material-ui/core';
import { GlobalState } from 'contexts/GlobalStateProvider';
import { useLocation } from 'react-router-dom';

function WrapWithDrawer(WrapperComponent) {
  const DrawerWrapper = ({ stage = 0, onClose, ...otherProps }) => {
    let location = useLocation();
    const {openDrawerId, setOpenDrawerId, drawerContent, setDrawerContent} = useContext(GlobalState);
    const [open, setOpen] = useState(false);

    useEffect(() => {
      if (openDrawerId.open === stage) {
        setOpen(true);
      }
      if (openDrawerId.close === stage) {
        setOpen(false);
      }
    }, [openDrawerId]);
    
    useEffect(() => {
      const query = queryString.parse(location.search);
      const nextStageQuery = query[`entry_${stage + 1}`];
      const temp = [...drawerContent];
      if (nextStageQuery && !temp[stage]) {
        const nextStageQueryString = nextStageQuery; //atob(nextStageQuery);
        const nextModuleName = nextStageQueryString.split('_')[0];
        const nextModuleId = nextStageQueryString.split('_')[1];
        const fieldId = nextStageQueryString.split('_')[2];
        temp.push({ moduleName: nextModuleName, moduleId: nextModuleId, fieldId: fieldId });
        setDrawerContent(temp);
        setOpenDrawerId({ open: stage + 1 });
      }
    }, [location]);

    if (!otherProps.isDrawer) {
      return <WrapperComponent stage={stage} {...otherProps} />;
    } else {
      return (
        <Drawer anchor='right' open={open} onClose={false} PaperProps={{style: {width: `${98 - stage * 3}%`}}} transitionDuration={300}>
          <WrapperComponent stage={stage} onBack={onClose} {...otherProps} />
        </Drawer>
      );
    }
  };

  return DrawerWrapper;
};

export default WrapWithDrawer;
