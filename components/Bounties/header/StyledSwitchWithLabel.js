import styled from 'styled-components'

const StyledSwitchWithLabel = styled.div`
  margin-left: ${props => props.styling && props.styling.marginLeft};
  @media (max-width: 900px) {
    margin-top: 10px;
    margin-left: 0px;
  }
`;

export default StyledSwitchWithLabel;
