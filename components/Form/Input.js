import React from 'react';
import StyledFieldset from './StyledFieldset';
import Label from './StyledLabel';
import StyledInput from './StyledInput';

const Input = ({hasLabel, htmlFor, label, max, min, name, placeholder, required, step, type}) => (
  <StyledFieldset>
    <Label
      hasLabel={hasLabel}
      htmlFor={htmlFor}
      label={label}
    />
    <StyledInput
      id={htmlFor}
      max={max || null}
      min={min || null}
      name={name || null}
      placeholder={placeholder || null}
      required={required || null}
      step={step || null}
      type={type || 'text'}
    />
  </StyledFieldset>
);

export default Input;
