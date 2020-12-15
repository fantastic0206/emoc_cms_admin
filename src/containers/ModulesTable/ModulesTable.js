import React, { useState, useEffect, useContext } from 'react';
import MaterialTable from 'material-table';
import {
  Button,
} from '@material-ui/core';
import { Link, useLocation, useHistory } from 'react-router-dom';
import customAxios from 'utils/customAxios';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import { SNACKBAR_OPTION } from 'utils/static';
import { useConfirm } from 'utils/ConfirmDialog';
import CircularProgressOverlay from 'components/Common/CircularProgressOverlay';
import { MODULES_CONTENT } from 'utils/modules';
import { MOMENT_CALENDAR_OPTION } from 'utils/static';
import { ModulesTableContainer } from './styles.js';

import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import BallotOutlinedIcon from '@material-ui/icons/BallotOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import BrokenImageOutlinedIcon from '@material-ui/icons/BrokenImageOutlined';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import clsx from 'clsx';
import { GlobalState } from 'contexts/GlobalStateProvider';

export default function ModulesTable() {
  const {sidebarToggle, setSidebarToggle, sidebarToggleMobile, setSidebarToggleMobile} = useContext(GlobalState);
  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  let location = useLocation();
  let history = useHistory();
  const [pages, setPages] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const confirm = useConfirm();

  let compName = location.pathname.split('/')[1];

  const getModules = async() => {
    setShowLoading(true);
    const {ok, data} = await customAxios.get(`/${MODULES_CONTENT[compName].dbTableName}`);

    setShowLoading(false);
    if (ok) {
      setPages(data)
    }
  };

  useEffect(() => {
    getModules();
  }, [location.pathname]);

  const handleCreateNew = () => {
    history.push(`${location.pathname}/0`);
  };

  const handleDelete = async (event, data) => {
    confirm({
      title: 'Are you sure?',
      message: `Do you really want to remove these modules?`,
      buttons: [
        {
          label: 'No',
          onClick: async () => {
            console.log('Delete Canceled')
          }
        },
        {
          label: 'Yes',
          onClick: async () => {
            setShowLoading(true);
            const res = await customAxios.post(`/${MODULES_CONTENT[compName].dbTableName}/delete`, {
              ids: data.map(item => item.id)
            });
            setShowLoading(false);
        
            if (res.ok) {
              enqueueSnackbar('Successfully deleted.', { 
                variant: 'success',
                ...SNACKBAR_OPTION
              });
            } else {
              enqueueSnackbar('Delete Failed.', { 
                variant: 'error',
                ...SNACKBAR_OPTION
              });
            }
        
            getModules();
          }
        },
      ]
    });
  };

  return (
    <ModulesTableContainer>
      <div className="modules-table--header">
        <button
          className={clsx(
            'navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn',
            { 'is-active': sidebarToggleMobile }
          )}
          onClick={toggleSidebarMobile}>
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
        <div className="modules-table--header-left">
          {
            MODULES_CONTENT[compName].groupName === 'Website Pages' ? (
              <BallotOutlinedIcon style={{ fontSize: 30 }} />
            ) : MODULES_CONTENT[compName].groupName === 'Basic Modules' ? (
              <VerifiedUserOutlinedIcon style={{ fontSize: 30 }} />
            ) : (
              <BrokenImageOutlinedIcon style={{ fontSize: 30 }} />
            )
          }
        </div>
        <div className="modules-table--header-center">
          <h2 className="modules-table--title">{MODULES_CONTENT[compName].groupName}</h2>
          <h4 className="modules-table--internal-name">{MODULES_CONTENT[compName].displayName}</h4>
        </div>
        <div className="modules-table--header-right">
          <Button
            color="primary"
            variant="contained"
            startIcon={<AddTwoToneIcon />}
            onClick={handleCreateNew}>
            Create {MODULES_CONTENT[compName].displayName}
          </Button>
        </div>
      </div>
      
      <div className="modules-table--container">
        <MaterialTable
          title={`${pages.length} entries found`}
          columns={[
            { title: 'Name', field: 'internalName',
              render: rowData =>
              <Link to={`${location.pathname}/${rowData.id}`}>
                <span>{rowData.internalName}</span>
              </Link>
            },
            {
              title: 'Author', 
              render: () => <span>Admin</span>
            },
            { title: 'Updated', field: 'updatedAt',
              render: rowData => 
              <span>
                {moment().isSame(moment(rowData.updatedAt), 'day') ? moment(rowData.updatedAt).startOf('hours').fromNow() : moment(rowData.updatedAt).calendar(MOMENT_CALENDAR_OPTION)}
              </span>
            }
          ]}
          data={pages}        
          options={{
            selection: true,
            pageSize: 10,
            headerStyle: {background: '#f7f9fa'},
          }}
          actions={[
            {
              tooltip: 'Remove All Selected Modules',
              icon: 'delete',
              onClick: handleDelete
            },
          ]}
        />
      </div>
      <CircularProgressOverlay active={showLoading} />
    </ModulesTableContainer>
  )
}
