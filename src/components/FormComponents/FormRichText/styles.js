import styled from 'styled-components';

const FormRichTextContainer = styled.div`
  .ql-editor {
    min-height: 150px;
    max-height: 300px;  
    & > * {
      color: black !important;
    }
    & > * > *{
      color: black !important;
    }
  }
  .ql-tooltip {
    left: 120px !important;
  }
`;

export { FormRichTextContainer };