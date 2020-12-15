import styled from 'styled-components';

const FormPaddingMarginContainer = styled.div`
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

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
`;

const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  .desc {
    color: #6a7889;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    span {
      margin: auto 0;
      padding: 0 10px;
    }
  }
`;

export { FormPaddingMarginContainer, Image, ValueContainer };