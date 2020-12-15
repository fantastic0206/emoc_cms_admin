import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { GlobalState } from 'contexts/GlobalStateProvider';
import { MODULES_CONTENT } from 'utils/modules';
import { ModuleWrapper } from 'components/ModulesDetail';
import { ModulesDetailContainer } from './styles.js';

export default function ModulesDetail() {
  let history = useHistory();
  let location = useLocation();
  let moduleName = location.pathname.split('/')[1];
  const {openDrawerId, setOpenDrawerId} = useContext(GlobalState);
  const {drawerContent, setDrawerContent} = useContext(GlobalState);

  const handleNewOpen = (newModuleName, newModuleId, fieldId, stage) => {
    let endpoint = ``;
    const appendPath = `entry_${stage + 1}=${newModuleName}_${newModuleId}_${fieldId}`; //`entry_${stage + 1}=` + btoa(`${newModuleName}_${newModuleId}`);
    if (stage === 0) {
      endpoint = `${location.pathname}?${appendPath}`;
    } else {
      endpoint = `${location.pathname}${location.search}&${appendPath}`;
    }
    history.push(endpoint);
  }

  const handleClose = (order) => {
    setOpenDrawerId({ close: order });

    let addr = location.search.split('&');
    addr.pop();
    const endpoint = `${location.pathname}${addr.join('&')}`;
    history.push(endpoint);
  }

  useEffect(() => {
    if (openDrawerId.close) {
      const interval = setTimeout(() => {
        const temp = [...drawerContent];
        temp.pop();
        setDrawerContent(temp);
      }, 300);
      return () => clearTimeout(interval);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openDrawerId]);

  return (
    <ModulesDetailContainer>
      <ModuleWrapper
        isDrawer={false}
        content={MODULES_CONTENT[moduleName]}
        openDrawer={(newModuleName, newModuleId, fieldId) => handleNewOpen(newModuleName, newModuleId, fieldId, 0)}
      />

      {drawerContent.map((item, index) => {
        return (
          <ModuleWrapper
            isDrawer={true}
            content={MODULES_CONTENT[item.moduleName]}
            moduleId={item.moduleId}
            stage={index + 1}
            onClose={() => handleClose(index + 1)}
            openDrawer={(newModuleName, newModuleId, fieldId) => handleNewOpen(newModuleName, newModuleId, fieldId, index + 1)}
          />
        )
      })}
    </ModulesDetailContainer>
  )
}
