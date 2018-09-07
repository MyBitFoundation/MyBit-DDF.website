import styled from 'styled-components';

const StyledStats = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -50px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    display: none;
  }

`;

export default StyledStats;
