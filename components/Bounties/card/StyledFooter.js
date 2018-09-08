import styled, {css} from 'styled-components'

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 359px) {
    display: block;
  }
`;

export default StyledFooter;
