import styled from 'styled-components';

const FormRadioContainer = styled.div`
  
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

const FormRadioImg = styled.img`
  width: 200px;
`;

export { FormRadioContainer, FormRadioImg };