import styled from 'styled-components';
import Img from '../Img';

const StyledLogo = styled(Img)`
  width: 130px;
  margin-left: 100px;
  position: relative;
  margin-top: 40px;

  @media (max-width: 850px) {
    width: 80px;
    margin-left: 40px;
    margin-top: 20px;
  }
`;

export default StyledLogo;
