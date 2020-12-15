import React, { useEffect, useState } from "react";
import { Grid, Card } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { useDropzone } from "react-dropzone";

import CloseTwoToneIcon from "@material-ui/icons/CloseTwoTone";
import CloudUploadTwoToneIcon from "@material-ui/icons/CloudUploadTwoTone";
import AddTwoToneIcon from "@material-ui/icons/AddTwoTone";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
import FormImageSelector from "./FormImageSelector";
import ComponentsWrapper from "../ComponentsWrapper";

import {
  FormImageSelectorContainer,
  FormTextFieldContainer,
} from "./styles.js";
import { TextField, MenuItem, Button } from "@material-ui/core";

const FormImageMultiSelector = ({
  id = "",
  value = [],
  valueType = "",
  onChange = (value) => {},
}) => {
  let dataAry = [];
  if(typeof value === "string") dataAry = value.split(",");
  else if(value === null) dataAry = [];
  else dataAry = value;

  const [imgBox, setImgBox] = useState(dataAry);
  const addThumb = (event) => {
    let temp = imgBox.slice();
    temp.push("");
    setImgBox(temp);
  };
  
  let imageData = imgBox.map((imgselector, index) => {
    const imgData = (
      <div className="image-set">
        <FormImageSelector
          valueType={valueType}
          key={index}
          value={imgselector}
          onChange={onChange}
        />
      </div>
    );
    return imgData;
  });

  return (
    <FormImageSelectorContainer>
      <Button
        onClick={addThumb}
        color="primary"
        variant="contained"
        startIcon={<AddTwoToneIcon />}
        style={{ width: "100%", height: "52px" }}
      >
        Add Image
      </Button>
      <div className="imgs-set">
        {imageData}
      </div>
    </FormImageSelectorContainer>
  );
};

export default ComponentsWrapper(FormImageMultiSelector);
