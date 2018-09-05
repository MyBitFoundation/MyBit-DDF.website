import styled from 'styled-components'

const StyledSwitch = styled.div`
  display: inline-block;
  .ant-switch{
    background-color: ${props => props.styling.unchecked.backgroundColor};
  }
  .ant-switch-checked{
    background-color: ${props => props.styling.checked.backgroundColor};
  }

  .ant-btn-clicked:after{
    border: 0 solid ${props => props.styling.checked.backgroundColor};
  }
`;

export default StyledSwitch;
