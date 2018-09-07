import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 767px) {
    display: block;
  }

`;

export default StyledHeader;
