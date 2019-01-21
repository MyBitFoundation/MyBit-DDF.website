import StyledFieldset from './StyledFieldset';
import Label from './Label';
import StyledInput from './StyledInput';

const Datalist = ({options, hasLabel, htmlFor, label, name, required}) => {
    // Get all options from option prop
    const dataOptions = options.split(', ');

    // Generate list of options
    const dataOptionsList = dataOptions.map((dataOption, index) => {
      return <option key={index} value={dataOption} />
    });

    return (
      <StyledFieldset>
        <Label
          hasLabel={hasLabel}
          htmlFor={htmlFor}
          label={label}
        />

        <StyledInput list={htmlFor} />

        <datalist
          defaultValue=''
          id={htmlFor}
          name={name || null}
          required={required || null}
        >
          <option value='' disabled>Select one option</option>

          {dataOptionsList}
        </datalist>
      </StyledFieldset>
    );
};

export default Datalist;
