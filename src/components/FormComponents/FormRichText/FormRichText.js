import React from 'react'
import ReactQuill from 'react-quill';
import ComponentsWrapper from '../ComponentsWrapper';
import { FormRichTextContainer } from './styles.js';

const FormRichText = ({
  value = '',
  onChange = (value) => {}
}) => {
  return (
    <FormRichTextContainer>
      <ReactQuill
        className='mb-2'
        theme="snow"
        value={value}
        modules={FormRichText.modules}
        onChange={onChange}
      />
    </FormRichTextContainer>
  )
};

FormRichText.modules = {
  toolbar: {
    container:
    [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],

      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],
      ['link'],
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],                                // remove formatting button         
    ]
  }
}

export default ComponentsWrapper(FormRichText);