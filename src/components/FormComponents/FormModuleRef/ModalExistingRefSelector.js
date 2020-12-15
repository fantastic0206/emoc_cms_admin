import React, { useState, useEffect } from 'react'
import {
  MenuItem,
  Dialog,
  FormControl,
  Select,
  CircularProgress,
} from '@material-ui/core';
import MaterialTable from 'material-table';

import { MODULES_CONTENT } from 'utils/modules';
import customAxios from 'utils/customAxios';
import CircularProgressOverlay from 'components/Common/CircularProgressOverlay';
import { ModalExistingRefSelectorContainer } from './styles.js';

const ModalExistingRefSelector = ({
  onClose,
  open = false,
  acceptTypes,
  handleRefLink
}) => {
  const [sections, setSections] = useState([]);
  const [selectedType, setSelectedType] = useState(acceptTypes[0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      handleClickType();
    }
  }, [selectedType, open]);

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  const onClickSection = (module) => {
    handleRefLink(module, MODULES_CONTENT[selectedType].dbTableName);
  }

  const handleClickType = async () => {
    setLoading(true);
    const {ok, data} = await customAxios.get(`/${MODULES_CONTENT[selectedType].dbTableName}`);
    setLoading(false);
    if (ok) {
      setSections(data)
    }
  };

  return (
    <Dialog
      fullWidth
      onClose={onClose}
      classes={{ paper: 'modal-content' }}
      open={open}>
      <ModalExistingRefSelectorContainer>
      {loading ? (
        <div className='modal-existing-assets--loading'>
          <CircularProgress size={30} />
          <span>Loading Content....</span>
        </div>
        ) : (
          <>
            <FormControl fullWidth variant="outlined">
              <Select
                value={selectedType}
                onChange={handleChange}>
                {acceptTypes.map((_type, _i) =>
                  <MenuItem key={_i} className="pr-5 px-3 text-dark" value={_type} >
                    {MODULES_CONTENT[_type].displayName}
                  </MenuItem>
                )}
              </Select>
            </FormControl>

            <MaterialTable
              title={`${sections.length} entries found`}
              columns={[
                { title: 'Name', field: 'internalName',
                  render: rowData => 
                  <div className="modal-existing-assets--table-cell" onClick={() => onClickSection(rowData)}>
                    <span className="type">
                      {MODULES_CONTENT[selectedType].displayName}
                    </span>
                    <span className="content">
                      {rowData.internalName}
                    </span>
                  </div>
                },
              ]}
              data={sections}        
              options={{
                selection: false,
                pageSize: 10,
                maxBodyHeight: '500px',
                headerStyle: {background: '#eee'},
              }}
            />
          </>
        )}
      </ModalExistingRefSelectorContainer>
    </Dialog>
  );
}

export default ModalExistingRefSelector;