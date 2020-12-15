import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';
import CloudUploadTwoToneIcon from '@material-ui/icons/CloudUploadTwoTone';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';

import ComponentsWrapper from '../ComponentsWrapper';
import { FormImageSelectorContainer } from './styles.js';

const FormImageSelector = ({
  id = '',
  value = '',
  valueType = '',
  title = "",
  onChange = () => {},
}) => {
  const [files, setFiles] = useState(value ? [{ preview: `${process.env.REACT_APP_IMAGE_URL}/${value}` }] : []);
  const {
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
    getRootProps,
    getInputProps
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: false,
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            origin: value,
            prevfile: files
          })
        )
      );
    }
  });

  const removeImage = (event) => {
    event.stopPropagation();
    setFiles([]);
    onChange(true, id+'Remove', files[0], valueType);
  }

  const thumbs = files.map((file) => (
    <div
      key={file.name}
      className="overflow-hidden h-100 w-100 bg-neutral-success text-center font-weight-bold text-success d-flex justify-content-center align-items-center">
      <img
        className="img-fit-container"
        style={{width: '100%', height: '100%', objectFit: 'contain'}}
        src={file.preview}
        alt="..."
      />
      <div className="remove-icon d-70 btn-icon mb-3 hover-scale-lg bg-white shadow-light-sm rounded-circle text-primary" onClick={removeImage}>
        <DeleteIcon className="d-50" />
      </div>
    </div>
  ));

  useEffect(() => {
    if (files.length > 0 && files[0].path) {
        onChange(files[0], valueType, null);
    }
  }, [files]);

  const props = { valueType: valueType };

  return (
    <FormImageSelectorContainer {...props}>
      <div className="dropzone w-100 h-100" onClick={open}>
        <div {...getRootProps({ className: 'dropzone-upload-wrapper h-100' })}>
          <input {...getInputProps()} />
          <div className="dropzone-inner-wrapper h-100" style={{padding: 0}}>
            {isDragAccept && (
              <div>
                <div className="d-100 btn-icon mb-3 hover-scale-lg bg-success shadow-success-sm rounded-circle text-white">
                  <CheckIcon className="d-50" />
                </div>
                <div className="font-size-sm text-success">
                  All files will be uploaded!
                </div>
              </div>
            )}
            {isDragReject && (
              <div>
                <div className="d-100 btn-icon mb-3 hover-scale-lg bg-danger shadow-danger-sm rounded-circle text-white">
                  <CloseTwoToneIcon className="d-50" />
                </div>
                <div className="font-size-sm text-danger">
                  Some files will be rejected!
                </div>
              </div>
            )}
            {!isDragActive && (
              <div className="w-100 h-100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                {thumbs.length > 0 ? <div className="w-100 h-100">{thumbs}</div> : 
                  <>
                    <div className="d-100 btn-icon mb-3 hover-scale-lg bg-white shadow-light-sm rounded-circle text-primary">
                      <CloudUploadTwoToneIcon className="d-50" />
                    </div>
                    <div className="font-size-sm">
                      Drag and drop files here{' '}
                      <span className="font-size-xs text-dark">
                        (All type of images)
                      </span>
                    </div>
                  </>
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </FormImageSelectorContainer>
  );
};

export default ComponentsWrapper(FormImageSelector);