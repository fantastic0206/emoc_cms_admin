/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';

function ComponentsWrapper(WrapperComponent) {

  const WrappedComponents = ({type, title, description, max, required = false, hideCharacters = false, ...otherProps}) => {
    if(otherProps.valueType === "multiImage") {
      title = "images";
    }
    return (
      <ComponentsWrapperContainer>
        <div className='components-wrapper--title'>
          <span>{title || 'Untitled'} {required ? '(required)' : otherProps.id === 'internalName' ? ' *' : ''}</span>
        </div>

        <div className='components-wrapper--component'>
          <WrapperComponent {...otherProps}/>
        </div>

        {!hideCharacters && type === 'formTextField' && (
          <div className='components-wrapper--bottom'>
            <span className='components-wrapper--cur-characters'>{otherProps.value?.toString().length || 0} characters</span>
            <span className='components-wrapper--max-characters'>Maximum {max || 256} characters</span>
          </div>
        )}

        {description && (
          <div className='components-wrapper--description'>
            <span>{description}</span>
          </div>
        )}
      </ComponentsWrapperContainer>
    )
  };

  return WrappedComponents;
};

export default ComponentsWrapper;

const ComponentsWrapperContainer = styled.div`
  border-left: solid 3px #D3DCE0;
  margin: 19px 0 29px;
  padding: 0 0 0 14px;

  .components-wrapper--title {
    color: #6a7889;
    font-size: 14px;
    line-height: 24px;
  }

  .components-wrapper--component {

  }

  .components-wrapper--bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;

    span {
      font-size: 14px;
      color: #536171;
    }
  }

  .components-wrapper--description {
    margin: 9px 0;

    span {
      font-size: 14px;
      line-height: 16px;
      font-style: italic;  
      color: #6a7889;
    }
  }
`;