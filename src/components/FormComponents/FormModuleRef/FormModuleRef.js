import React, { useState } from 'react'
import ComponentsWrapper from '../ComponentsWrapper';
import { ModuleRefCard, ModalExistingRefSelector, AddRefButtons } from './';
import { FormModuleRefContainer } from './styles.js';

const FormModuleRef = ({
  id = '',
  acceptType = '',
  value,
  linkHideButton = '',
  createHideButton = '',
  handleRefEdit = (moduleName, moduleId, fieldId) => {},
  onChange = (value) => {},
}) => {
  const [showModal, setShowModal] = useState(false);
  
  const handleRefRemove = (id) => {
    onChange(null);
  };

  const handleRefLink = (module, selectedType) => {
    onChange({
      id: module.id,
      internalName: module.internalName
    });
    setShowModal(false);
  };

  return (
    <FormModuleRefContainer>
      {value?.internalName ? (
        <ModuleRefCard 
          moduleName={acceptType}
          value={value}
          handleRefEdit={(moduleName, moduleId) => handleRefEdit(moduleName, moduleId, id)}
          handleRefRemove={handleRefRemove}
        />
      ) : (
        <div className=''>
          <AddRefButtons
            linkHideButton={linkHideButton}
            createHideButton={createHideButton}
            handleClickNew={() => handleRefEdit(acceptType, 0, id)}
            handleClickExist={() => setShowModal(true)}
          />
          <ModalExistingRefSelector
            acceptTypes={[acceptType]}
            open={showModal}
            onClose={() => setShowModal(false)}
            handleRefLink={handleRefLink}
          />
        </div>
      )}
    </FormModuleRefContainer>
  )
}

export default ComponentsWrapper(FormModuleRef);