import Label from './Label';
import StyledFieldset from './StyledFieldset';
import StyledTextarea from './StyledTextarea';

const Textarea = ({hasLabel, htmlFor, label, cols, name, rows, required, placeholder}) => (
  <StyledFieldset>
    <Label
      hasLabel={hasLabel}
      htmlFor={htmlFor}
      label={label}
    />

    <StyledTextarea
      className="FormControl"
      cols={cols || null}
      id={htmlFor}
      name={name || null}
      required={required || null}
      rows={rows || null}
      placeholder={placeholder || null}
    >
    </StyledTextarea>
  </StyledFieldset>
);

export default Textarea;
