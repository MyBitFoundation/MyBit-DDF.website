import styled, {css} from 'styled-components'

const StyledRepoName = styled.a`
  font-size: 16px;
  font-weight: normal;
  color: #1890ff;
  margin-top: 8px;
  cursor: pointer;
  display: block;
  width: max-content;

  :hover{
    color: #40a9ff;
    text-decoration: none;
  }

  :focus{
    text-decoration: none;
  }

  ${props => props.state === "closed" && css`
    color: #7d7d7d;
    cursor: initial;

    &:focus,
    &:hover{
      color: #7d7d7d;
    }
  `}
`;

export default StyledRepoName;
