import StyledFieldset from './StyledFieldset';
import Label from './Label';
import StyledRadio from './StyledRadio';

const Radio = ({htmlFor, label, name, required}) => (
  <StyledFieldset>
    <Label
      htmlFor={htmlFor}
      label={label}
    >
      <StyledRadio
        id={htmlFor}
        name={name || null}
        required={required || null}
        type='radio'
      />
      {label}
    </Label>
  </StyledFieldset>
);

export default Radio;
