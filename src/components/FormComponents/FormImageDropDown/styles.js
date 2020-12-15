import styled from 'styled-components';

const FormImageDropDownContainer = styled.div`
  
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

const SelectedImage = styled.img`
  width: 50%;
  height: 50%;
  margin-bottom: 20px;
`;

export { FormImageDropDownContainer, SelectedImage };