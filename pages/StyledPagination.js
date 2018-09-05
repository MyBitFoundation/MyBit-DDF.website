import styled, { css } from 'styled-components'

const StyledPagination = styled.div`
  margin-top: 40px;
  margin-bottom: 60px;

  @media (max-width: 767px) {
    width: max-content;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 60px;
  }
`;

export default StyledPagination;
