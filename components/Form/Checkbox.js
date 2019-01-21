import StyledFieldset from './StyledFieldset';
import Label from './Label';
import StyledCheckbox from './StyledCheckbox';

const Checkbox = ({htmlFor, label, name, required}) => (
  <StyledFieldset>
    <Label
      htmlFor={htmlFor}
      label={label}
    >
      <StyledCheckbox
        id={htmlFor}
        name={name || null}
        required={required || null}
        type='checkbox'
      />
      {label}
    </Label>
  </StyledFieldset>
);

export default Checkbox;
