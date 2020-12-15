import React, { useState } from 'react'
import {
  Popover,
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { MODULES_CONTENT } from 'utils/modules';
import { ModuleRefCardContainer, ModuleRefMenuContainer } from './styles.js';

export default function ModuleRefCard({
  moduleName = '',
  value = {},
  handleRefEdit = (moduleName, moduleId) => {},
  handleRefRemove = () => {},
}) {
  const [anchorElPop, setAnchorElPop] = useState(null);
  const openPop = Boolean(anchorElPop);
  const handleClickPopover = (event) => {
    event.stopPropagation();
    setAnchorElPop(event.currentTarget);
  };
  const handleClosePopover = () => {
    setAnchorElPop(null);
  };
  return (
    <ModuleRefCardContainer className={'module-ref-card--container ' + (!value?.internalName ? 'card-removed' : '')}>
      <div className='content-wrapper' onClick={() => value?.internalName && handleRefEdit(moduleName, value.id)}>
        <div className='type-wrapper'>
          <span className='type'>{MODULES_CONTENT[moduleName].displayName}</span>
          <span style={{ pointerEvents: 'none' }}>
            <MoreHorizIcon onClick={handleClickPopover} style={{ cursor: 'pointer', pointerEvents: 'all' }} />
          </span>
        </div>
        <div className='content'>{value?.internalName || 'MODULE IS NOT EXIST'}</div>
      </div>

      <Popover
        open={openPop}
        anchorEl={anchorElPop}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        >
          <ModuleRefMenuContainer>
            {value?.internalName && (
              <div 
                className="module-ref-menu--item"
                onClick={() => {
                  setAnchorElPop(null);
                  handleRefEdit(moduleName, value.id);
                }}
              >
                Edit
              </div>
            )}
            <div 
              className="module-ref-menu--item"
              onClick={() => {
                setAnchorElPop(null);
                handleRefRemove();
              }}
            >
              Remove
            </div>
          </ModuleRefMenuContainer>
      </Popover>
    </ModuleRefCardContainer>
  )
}
