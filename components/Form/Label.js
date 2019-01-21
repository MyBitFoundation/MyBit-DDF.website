import StyledLabel from './StyledLabel';

const Label = ({hasLabel, htmlFor, label}) => {
    if (hasLabel === 'true') {
      return <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>
    } else {
      return null;
    }
};

export default Label;
