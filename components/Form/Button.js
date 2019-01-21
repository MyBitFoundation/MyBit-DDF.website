import StyledButton from './StyledButton'

const Button = ({type, value, text}) => (
    <StyledButton
      type={type || 'button'}
      value={value || null}
    >
      {text}
    </StyledButton>
);

export default Button;
