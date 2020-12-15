import styled from 'styled-components';

const FormModuleRefContainer = styled.div`
  
`;

const FormModuleRefArrayContainer = styled.div`

`;

const ModuleRefCardContainer = styled.div`
  border: solid 1px #D3DCE0;
  margin-bottom: 10px;
  display: flex;
  background-color: white;
  cursor: pointer;
  transition: border-color .2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0,0,0,.08);

  &:hover {
    border-color: #3c44b1;
  }

  .handler {
    border-right: solid 1px #D3DCE0;
    display: flex;
    align-items: center;
    background-color: #F7F9FA;
  }

  .content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 14px;

    .type-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .type {
        font-size: 16px;
        color: #606c7c;
        margin-right: auto;
        line-height: 24px;
        margin-bottom: 4px;
      }

      .status {
        font-size: 16px;
        font-weight: 800;
        color: #18875D;
        margin-right: 10px;
      }
    }

    .content {
      color: #192532;
      font-size: 16px;
      font-weight: bold;
      line-height: 24px;
    }
  }

  &.card-removed {
    border: solid 1px #EEE;

    &:hover {
      border-color: #EEE;
    }

    .content-wrapper {
      .content {
        color: #aaa;
        font-style: italic;
      }
    }
  }
`;

const ModuleRefMenuContainer = styled.div`
  padding: 14px 0;

  .module-ref-menu--item {
    padding: 7px 20px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background: #f7f9fa;
    }
  }
`;

const ModalExistingRefSelectorContainer = styled.div`
  padding: 30px;

  .MuiOutlinedInput-root {
    border-radius: 0;
  }

  .MuiPaper-root {
    box-shadow: none !important;

    .MuiToolbar-root {
      padding-left: 12px;

      .MuiTypography-h6 {
        font-size: 14px;
      }
    }

    .MuiTable-root {
      .MuiTableHead-root {
        display: none;
      }
      

      .MuiTableBody-root {
        font-size: 14px;

        .MuiTableRow-root {
          .MuiTableCell-root {
            border: none;
            padding: 0;
          }
        }

        .modal-existing-assets--table-cell {
          border: 1px solid #D3DCE0;
          padding: 14px;
          margin-bottom: 9px;
          cursor: pointer;
          display: flex;
          flex-direction: column;

          &:hover {
            background: #f7f7f7;
          }

          .type {
            font-size: 16px;
            color: #606c7c;
            margin-right: auto;
            line-height: 24px;
            margin-bottom: 4px;
          }

          .content {
            color: #192532;
            font-size: 16px;
            font-weight: bold;
            line-height: 24px;
          }
        }
      }

      .MuiTableFooter-root {
        .MuiTableRow-footer {
          .MuiTablePagination-root:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }

  .modal-existing-assets--loading {
    height: calc(100vh - 300px);
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 18px;
      font-weight: 500;
      margin-left: 15px;
    }
  }
`;

const AddRefButtonsContainer = styled.div`
  margin: 12px 0 10px;

  button {
    margin-right: 15px;
  }
`;

export {
  FormModuleRefContainer,
  FormModuleRefArrayContainer,
  ModuleRefCardContainer,
  ModuleRefMenuContainer,
  ModalExistingRefSelectorContainer,
  AddRefButtonsContainer,
};
