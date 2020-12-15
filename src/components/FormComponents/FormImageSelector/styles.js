import styled from 'styled-components';

const FormImageSelectorContainer = styled.div`
  ${props => props.valueType === 'multiImage' && `
    height: 150px;
  `}
  ${props => props.valueType === 'image' && `
    height: 300px;
    width: 70%;
  `}
  ${props => props.valueType === 'icon' && `
    height: 150px;
    width: 290px;
  `}

  .dropzone-upload-wrapper .dropzone-inner-wrapper {
    border-radius: 0;
  }
  .remove-icon {
    display: none !important;
  }
`;

const FormTextFieldContainer = styled.div`
  .MuiOutlinedInput-root {
    border-radius: 0;

    .MuiOutlinedInput-input {
      padding: 12px;
      font-size: 14px;
      color: #536171;
    }
  }

  .MuiOutlinedInput-multiline {
    padding: 0;
  }
`;

export { FormImageSelectorContainer, FormTextFieldContainer };