import styled from 'styled-components';

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

export { FormTextFieldContainer };