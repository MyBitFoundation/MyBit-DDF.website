import styled, {css} from 'styled-components'

const StyledValueLabel = styled.span`
  font-size: 16px;
  font-weight: normal;
  color: #4a4a4a;

  ${props => props.state === "CLOSED" && css`
    color: #7d7d7d;
  `}
`;

export default StyledValueLabel;
