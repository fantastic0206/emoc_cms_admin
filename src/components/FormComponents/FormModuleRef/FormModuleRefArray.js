import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Menu,
  MenuItem,
} from '@material-ui/core';
import { MODULES_CONTENT, DBTABLE_TO_MODULE } from 'utils/modules';
import ComponentsWrapper from '../ComponentsWrapper';
import { ModuleRefCard, AddRefButtons, ModalExistingRefSelector  } from './';
import { FormModuleRefArrayContainer, ModuleRefMenuContainer } from './styles';

const FormModuleRefArray = ({
  id = '',
  value = [],
  acceptType,
  handleRefEdit = (moduleName, moduleId, fieldId) => {},
  onChange = (value) => {}
}) => {
  const [selectedValue, setSelectedValue] = useState();
  const [showModal, setShowModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleClickNew = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickExist = () => {
    setShowModal(true);
  }

  const handleCloseModal = (value) => {
    setShowModal(false);
    setSelectedValue(value);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const reorder = (list, startIndex, endIndex) => {
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);
    return list;
  };
  
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const newArray = reorder(
      [...value],
      result.source.index,
      result.destination.index
    );

    onChange(newArray);
  }

  const handleRefLink = (module, selectedType) => {
    let newData = {
      moduleId: module.id,
      moduleName: selectedType,
      module: {
        id: module.id,
        internalName: module.internalName
      }
    };
    let temp = [...value];
    temp.push(newData)
    onChange(temp)
  }

  const handleRefRemove = (index) => {
    let temp = [...value];
    temp.splice(index, 1);
    onChange(temp);
  };
  
  return (
    <FormModuleRefArrayContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="grid">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {
                value.map((_component, _i) => (
                  <Draggable draggableId={`${_component.moduleName}_${_component.moduleId}_${_i}`} index={_i} key={`${_component.moduleName}_${_component.moduleId}_${_i}`}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`${snapshot.isDragging && 'dragging'}`}
                      >
                        <ModuleRefCard
                          moduleName={DBTABLE_TO_MODULE[_component.moduleName]}
                          value={_component.module}
                          handleRefEdit={(moduleName, moduleId) => handleRefEdit(moduleName, moduleId, `${id}-${_i}`)}
                          handleRefRemove={() => handleRefRemove(_i)}
                        />
                      </div>
                    )}
                  </Draggable>
                ))
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className=''>
        <AddRefButtons
          handleClickNew={handleClickNew}
          handleClickExist={handleClickExist}
        />
        <ModalExistingRefSelector
          selectedValue={selectedValue}
          acceptTypes={acceptType}
          open={showModal}
          onClose={handleCloseModal}
          handleRefLink={handleRefLink}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          classes={{ list: 'p-0' }}
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <ModuleRefMenuContainer>
            {acceptType.map((_type, _i) =>
              <MenuItem 
                key={_i} 
                className="module-ref-menu--item" 
                onClick={() => {
                  handleRefEdit(_type, 0, `${id}-${value.length}`)
                  setAnchorEl(null);
                }}
              >
                {MODULES_CONTENT[_type].displayName}
              </MenuItem>
            )}
          </ModuleRefMenuContainer>
        </Menu>
      </div>
    </FormModuleRefArrayContainer>
  )
}

export default ComponentsWrapper(FormModuleRefArray);