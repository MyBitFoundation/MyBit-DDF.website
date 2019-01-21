import StyledFieldset from './StyledFieldset';
import Label from './Label';
import StyledSelect from './StyledSelect';

const Select = ({options, hasLabel, htmlFor, label, name, required}) => {
  // Get all options from option prop
  const selectOptions = options.split(', ');

  // Generate list of options
  const selectOptionsList = selectOptions.map((selectOption, index) => {
    return <option key={index} value={index}>{selectOption}</option>
  });

  return (
    <StyledFieldset>
      <Label
        hasLabel={hasLabel}
        htmlFor={htmlFor}
        label={label}
      />

      <StyledSelect
        defaultValue=''
        id={htmlFor}
        name={name || null}
        required={required || null}
      >
        <option value='' disabled>Select one option</option>

        {selectOptionsList}
      </StyledSelect>
    </StyledFieldset>
  );
};

export default Select;
