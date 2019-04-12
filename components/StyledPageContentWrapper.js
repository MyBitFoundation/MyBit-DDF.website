import styled from 'styled-components'

const StyledPageContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  min-height: 800px;
  position: relative;

  @media (max-width: 767px) {
    padding: 10px;
  }
`;

export default StyledPageContentWrapper;
