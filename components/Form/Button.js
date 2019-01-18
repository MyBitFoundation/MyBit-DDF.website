import StyledFieldset from './StyledFieldset';
import StyledButton from "./StyledButton";

const Button = ({type, value, text}) => (
  <StyledFieldset>
    <StyledButton
      type={type || 'button'}
      value={value || null}
    >
      {text}
    </StyledButton>
  </StyledFieldset>
);

export default Button;
