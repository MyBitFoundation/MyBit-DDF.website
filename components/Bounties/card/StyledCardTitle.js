import styled, {css} from 'styled-components'

const StyledCardTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #4a4a4a;
  margin-right: 5px;

  ${props => props.state === "CLOSED" && css`
    color: #7d7d7d;
  `}
`;

export default StyledCardTitle;
