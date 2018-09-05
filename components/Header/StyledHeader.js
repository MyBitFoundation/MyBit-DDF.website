import styled from 'styled-components';

const StyledHeader = styled.header`
  background: ${props => props.backgroundColor};
  height: 221px;
  width: 100%;

  @media (max-width: 850px) {
    height: 100px;
    margin-bottom: 20px;
  }
`;

export default StyledHeader;
