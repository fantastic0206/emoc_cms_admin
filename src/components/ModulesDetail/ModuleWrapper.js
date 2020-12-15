import React, { useContext, useState, useEffect } from 'react'
import queryString from 'query-string';
import { AppBar, Button } from '@material-ui/core'
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useConfirm } from 'utils/ConfirmDialog';
import { MODULES_CONTENT } from 'utils/modules';
import { GlobalState } from 'contexts/GlobalStateProvider';
import { SNACKBAR_OPTION } from 'utils/static';
import customAxios from 'utils/customAxios';
import { FormTextField, FormModuleRef, FormRichText, FormSelect, FormRadio, FormPaddingMargin, FormToogle, FormModuleRefArray, FormImageSelector, FormImageDropDown, FormImageMultiSelector } from 'components/FormComponents';
import WrapWithDrawer from './WrapWithDrawer';
import { ModuleWrapperContainer } from './styles.js';
import CircularProgressOverlay from 'components/Common/CircularProgressOverlay';

import ArrowBackIosTwoToneIcon from '@material-ui/icons/ArrowBackIosTwoTone';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';

const FORM_COMPONENTS = {
  formTextField: FormTextField,
  formModuleRef: FormModuleRef,
  formRichText: FormRichText,
  formSelect: FormSelect,
  formRadio: FormRadio,
  formPaddingMargin: FormPaddingMargin,
  formToogle: FormToogle,
  formImageSelector: FormImageSelector,
  formImageMultiSelector: FormImageMultiSelector,
  formModuleRefArray: FormModuleRefArray,
  formImageDropDown: FormImageDropDown,
};

const ModuleWrapper = (props) => {
  const [sectionDetail, setSectionDetail] = useState({});
  const { drawerContent, setDrawerContent, sidebarToggleMobile, setSidebarToggleMobile } = useContext(GlobalState);
  const toggleSidebarMobile = () => {
    setSidebarToggleMobile(!sidebarToggleMobile);
  };
  let { moduleId: tmpId } = useParams();
  const moduleId = parseInt(props.isDrawer ? props.moduleId : tmpId);
  const [loading, setLoading] = useState(moduleId === 0 ? false : true);
  let history = useHistory();
  let location = useLocation();
  const [showLoading, setShowLoading] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const confirm = useConfirm();
  const [isChanged, setChanged] = useState(false);
  const [slideImg, setSlideImg] = useState("");
  useEffect(() => {
    if (moduleId) {
      getSectionByID();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleId]);

  useEffect(() => {
    if (props.stage === drawerContent.length - 1) {
      const lastDrawer = drawerContent[drawerContent.length - 1];

      if (lastDrawer.internalName) {
        let [fieldId, refArrIndex] = lastDrawer.fieldId.split('-');
        const newValue = {
          module: {
            id: parseInt(lastDrawer.moduleId, 10),
            internalName: lastDrawer.internalName,
          },
          moduleId: lastDrawer.moduleId,
          moduleName: MODULES_CONTENT[lastDrawer.moduleName].dbTableName,
        };
        if (!refArrIndex) {
          setSectionDetail({
            ...sectionDetail,
            [fieldId]: {
              ...sectionDetail[fieldId],
              ...newValue.module,
            },
          });
        } else {
          refArrIndex = parseInt(refArrIndex, 10);
          let refArr = sectionDetail[fieldId] || [];
          if (refArr.length > refArrIndex) {
            refArr[refArrIndex] = newValue;
          } else {
            refArr.push(newValue);
          }

          setSectionDetail({
            ...sectionDetail,
            [fieldId]: refArr,
          });
        }

        setChanged(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerContent]);

  const getSectionByID = async () => {
    setLoading(true);
    const { ok, data } = await customAxios.get(`/${props.content.dbTableName}/${moduleId}`);
    if (ok) {
      if (data.multiimage) {
        let existImg = data.multiimage;
        setSectionDetail({ ...data, existImg: existImg })
      }
      else setSectionDetail(data);
    }
    setLoading(false)
  };
  const removeElementFromString = (strRoot, delItem, symb) => {
    let ary = strRoot.split(symb);
    let rtnAry = [];
    for(let i = 0 ; i < ary.length ; i++) {
      if(ary[i] !== delItem) {
        rtnAry.push(ary[i])
      }
    }
    return rtnAry.toString();
  }
  const handleBack = (forceBack = false) => {
    if (isChanged && !forceBack) {
      confirm({
        title: 'Are you sure?',
        message: `Changes you've made will be lost if you continue.`,
        buttons: [
          {
            label: 'Go Back',
            onClick: async () => {
              console.log('Back Canceled')
            }
          },
          {
            label: 'Continue without Saving',
            onClick: async () => {
              gotoBack();
            }
          },
          {
            label: 'Save & Continue',
            onClick: async () => {
              handleSave();
              gotoBack();
            }
          },
        ]
      });
    } else {
      gotoBack();
    }
  };

  const gotoBack = () => {
    if (props.onBack) {
      props.onBack();
    } else {
      const addr = location.pathname.split('/');
      addr.pop();
      history.push(addr.join('/'));
    }
  }

  const handleValueChange = (id, value, imageStatus = true, valType = "", isupdate = null) => {
    if (imageStatus) { //// when delete button clicked
      if (isupdate === "multiImage") {  //MultiImage
        // In this case,  valType = file data
        // isupdata = valType
        if (valType.name) {
          let imageAry = sectionDetail.multiimage.slice();
          let delIndex = imageAry.findIndex((item, index) => {
            if (item === valType) return index;
          })
          imageAry.splice(delIndex, 1);
          setSectionDetail({
            ...sectionDetail,
            multiimage: imageAry,
            [id]: true,
          });
        } else { // when existing image is deleted.

          let filename = valType.preview.replace(`${process.env.REACT_APP_IMAGE_URL}/`, "");
          let ary = sectionDetail.existImg.split(",");
          let tmpAry = [];
          for (let i = 0; i < ary.length; i++) {
            if (ary[i].indexOf(filename) !== -1) {
              continue;
            }
            tmpAry.push(ary[i]);
          }
          setSectionDetail({
            ...sectionDetail,
            [id]: true,
            existImg: tmpAry.toString()
          })
        }
        
      } else {
        setSectionDetail({
          ...sectionDetail,
          [id]: true,
        })
      }
    }
    else {
      if (valType === "multiImage") {
        // let strtmp = sectionDetail.existImg;
        // let imgAry = Array.isArray(sectionDetail.multiimage) ? sectionDetail.multiimage.slice() : [];
        let strtmp = "";
        let imgAry = [];
        if (value.origin !== "") { // exist image changed
          if(sectionDetail.existImg.indexOf(value.origin) >= 0) { //exist image changed
            
            strtmp = removeElementFromString(sectionDetail.existImg, value.origin, ",");
            imgAry = (sectionDetail.multiimage && Array.isArray(sectionDetail.multiimage)) ? sectionDetail.multiimage : [];
            imgAry.push(value);
          } else { // add photo 
            if(value.prevfile) { //
              let tempAry = (sectionDetail.multiimage && Array.isArray(sectionDetail.multiimage)) ? sectionDetail.multiimage : [];
              for(let i = 0 ; i < tempAry.length ; i++) {
                if(tempAry[i] !== value.prevfile[0]) 
                  imgAry.push(tempAry[i]);
              }
              strtmp = sectionDetail.existImg;
              imgAry.push(value);
            } 
          }
        } else { // new photo                                                                                                        
          if(Array.isArray(value.prevfile)) {
            let tmpAry = (sectionDetail.multiimage && Array.isArray(sectionDetail.multiimage)) ? sectionDetail.multiimage : [];
            for(let i = 0 ; i < tmpAry.length ; i++) {
              if(tmpAry[i] !== value.prevfile[0]) 
                imgAry.push(tmpAry[i]);
            }
            strtmp = sectionDetail.existImg;
            imgAry.push(value);
          } else {
            strtmp = sectionDetail.existImg;
            imgAry = sectionDetail.multiimage ? sectionDetail.multiimage : [];
            imgAry.push(value);
          }
        }
        
        setSectionDetail({
          ...sectionDetail,
          multiimage: imgAry,
          [id + 'Remove']: false,
          "imgType": true,
          existImg: strtmp === undefined ? "" : strtmp
        });

      } else {
        setSectionDetail({
          ...sectionDetail,
          [id]: value,
          [id + 'Remove']: false,
        });
      }
    }

    setChanged(true);
  };

  const handleSave = async () => {
    let res;
    setShowLoading(true);
    const formData = new FormData();
    for (var key in sectionDetail) {
      if (sectionDetail[key] === null) continue;
      if (sectionDetail["imgType"] && key === "multiimage") { // slide image
        for (let i = 0; i < sectionDetail[key].length; i++) {
          formData.append(key, sectionDetail[key][i]);
        }
        continue;
      }
      if(key === "transitionEffect" && sectionDetail.slideType === "Multi Image") {
        formData.append(key, "Fly In Right");
        continue;
      }
      if (typeof sectionDetail[key] === "object" && typeof sectionDetail[key]?.name !== 'string') {
        formData.append(key, JSON.stringify(sectionDetail[key]));
      } else {
        formData.append(key, sectionDetail[key]);
      }
    }
    if(sectionDetail.toggleButton === undefined) formData.append("toggleButton", "text");
    
    if (moduleId === 0) {

      res = await customAxios.post(`/${props.content.dbTableName}`, formData);
    } else {
      res = await customAxios.put(`/${props.content.dbTableName}/${moduleId}`, formData);
    }
    setShowLoading(false);
    if (res.ok) {
      setChanged(false);

      enqueueSnackbar('Successfully saved.', {
        variant: 'success',
        ...SNACKBAR_OPTION
      });

      if (drawerContent.length > 0) {
        const temp = [...drawerContent];
        const lastContent = temp.pop();
        temp.push({
          ...lastContent,
          moduleId: res.data.id,
          internalName: sectionDetail.internalName,
        });
        setDrawerContent(temp);
      }
      if (props.stage > 0) {
        handleBack(true);
      } else {
        if (moduleId === 0) {
          let endpoint;
          let addr = location.pathname.split('/');
          addr.pop();
          addr.push(res.data.id);
          endpoint = addr.join('/');
          history.push(endpoint);
        }
      }
    } else {
      enqueueSnackbar('Save Failed.', {
        variant: 'error',
        ...SNACKBAR_OPTION
      });
    }
  };
  return (
    <ModuleWrapperContainer reRender={props.reRender}>
      <div className="module-wrapper--header">
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
        <div className="module-wrapper--header-left" onClick={() => props.content.displayName !== "Site Setting Module" ? handleBack() : {}}>
          {props.content.displayName !== "Site Setting Module" ? <ArrowBackIosTwoToneIcon /> : <ArrowBackIosTwoToneIcon color={'disabled'} />}
        </div>
        <div className="module-wrapper--header-center">
          <h2 className="module-wrapper--title">{props.content.displayName}</h2>
          <h4 className="module-wrapper--internal-name">{sectionDetail.internalName || 'Untitled'}</h4>
        </div>
        <div className="module-wrapper--header-right">
          <Button
            color="primary"
            variant="contained"
            startIcon={<SaveOutlinedIcon />}
            onClick={handleSave}
            disabled={!isChanged}>
            Save
          </Button>
        </div>
      </div>

      <div className='module-wrapper--form-container'>
        {loading ? (
          <div className='module-wrapper--loading'>
            <CircularProgress size={30} />
            <span>Loading Content....</span>
          </div>
        ) :
          props.content.components.filter(_component => {
          
            if ((_component.props.isMultiImg && slideImg === "Single Image") || (sectionDetail["slideType"] === "Single Image") && _component.props.isMultiImg ) {
              return false
            }

            return true;
          }).map(_component => {
            const Content = FORM_COMPONENTS[_component.name];
            console.log("<>", sectionDetail, _component.props.id)
            return (
              <Content
                {..._component.props}
                key={_component.props.id}
                type={_component.name}
                value={slideImg === "Multi Image" && _component.props.id === "transitionEffect" && sectionDetail.slideType === "Multi Image" ? "Fly In Right": sectionDetail[_component.props.id]}
                slideImg={slideImg}
                options={slideImg === "Multi Image" && _component.props.id === "transitionEffect" && sectionDetail.slideType === "Multi Image" ? [{
                  label: 'Fly In Right',
                  value: 'Fly In Right'
                }]: _component.props.options}
                onChange={(value, id = null, files = null, isUpdate = null) => {
  
                  if (value === true) { //image
                    handleValueChange(id, value, true, files, isUpdate /* this is valtype */);
                  }
                  else {
                    handleValueChange(_component.props.id, value, false);
                  }
                  if (value === "Single Image" || value === "Multi Image")
                    setSlideImg(value);
                  if (id === "multiImage") {
                    handleValueChange(_component.props.id, value, false, id, isUpdate)
                  }
                }
                }
                handleRefEdit={props.openDrawer}
              />
            )
          })
        }
      </div>

      <CircularProgressOverlay active={showLoading} />
    </ModuleWrapperContainer>
  )
}

export default WrapWithDrawer(ModuleWrapper);
