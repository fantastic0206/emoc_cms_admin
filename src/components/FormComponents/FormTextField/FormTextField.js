import React from "react";
import { TextField } from "@material-ui/core";
import ComponentsWrapper from "../ComponentsWrapper";
import { FormTextFieldContainer } from "./styles.js";

const FormTextField = ({
  id,
  value = "",
  slideTypeOption = "",
  rows = false,
  textType = "text",
  slideImg = "",
  onChange = (value) => {},
}) => {
  return (
    <>{
    <FormTextFieldContainer>
      <TextField
        fullWidth
        variant="outlined"
        value={value || ""}
        onChange={(event) => onChange(event.target.value)}
        type={textType}
        {...(rows && { multiline: true, rows: rows })}
        {...(id === "internalName" && { autoFocus: true })}
      />
    </FormTextFieldContainer>}
    </>
  );
};

export default ComponentsWrapper(FormTextField);
