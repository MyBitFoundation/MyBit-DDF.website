import StyledForm from './StyledForm';

const Form = ({method, action, children}) => (
  <StyledForm
    method={method || ''}
    action={action || ''}
  >
    {children}
  </StyledForm>
);

export default Form;
