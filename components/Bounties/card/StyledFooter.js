import styled from 'styled-components'

const StyledFooter = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  a{
    width: auto;
  }
`;

export default StyledFooter;
