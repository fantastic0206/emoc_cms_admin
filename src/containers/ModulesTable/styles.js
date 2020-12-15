import styled from 'styled-components';

const ModulesTableContainer = styled.div`
  .modules-table--header {
    border-top: 1px solid #b4c3ca;
    border-bottom: 1px solid #b4c3ca;
    box-shadow: 0px 1px 10px rgba(0,0,0,.2);
    background-color: #f7f9fa;
    padding: 0;
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 50;
    height: 77px;

    .modules-table--header-left {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      border-right: 1px solid #e5ebed;
      width: 65px;
    }

    .modules-table--header-center {
      padding: 17px 20px 15px;

      .modules-table--title {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 2px;
      }

      .modules-table--internal-name {
        font-size: 21px;
        font-weight: 600;
        margin-bottom: 0;
      }
    }

    .modules-table--header-right {
      right: 0;
      position: fixed;
      display: flex;
      align-items: center;
      height: 77px;
      padding-right: 40px;
    }
  }

  .modules-table--container {
    padding: 100px 40px 20px;
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
        border: 1px solid #e5ebed;

        .MTableHeader-header-13 {
          font-size: 14px;
        }

        .MuiTableRow-root {
          .MuiTableCell-root:first-child {
            width: 37px !important;

            .MuiCheckbox-root {
              padding: 9px 5px 9px 13px;

              .MuiSvgIcon-root {
                width: 18px;
                height: 18px;
              }
            }
          }
        }
      }
      

      .MuiTableBody-root {
        border: 1px solid #e5ebed;
        font-size: 14px;

        .MuiTableRow-root {
          .MuiTableCell-root:first-child {
            width: 37px !important;

            .MuiCheckbox-root {
              padding: 9px 5px 9px 13px;

              .MuiSvgIcon-root {
                width: 18px;
                height: 18px;
              }
            }
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
  
`;

export { ModulesTableContainer };