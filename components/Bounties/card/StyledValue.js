import styled, {css} from 'styled-components'

const StyledValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #1890ff;
  padding: 5px 20px;
  background-color: rgba(24, 144, 255, 0.1);
  border-radius: 4px;
  margin-left: 10px;

  ${props => props.state === "CLOSED" && css`
    background-color: rgba(125, 125, 125, 0.2);
    color: #7d7d7d;
  `}
`;

export default StyledValue;
