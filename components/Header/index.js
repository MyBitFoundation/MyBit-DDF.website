import styled from 'styled-components'
import Constants from '../Constants';
import Img from '../Img';
import NavigationBar from '../NavigationBar';

const StyledHeader = styled.header`
  background: ${Constants.colors.backgroundGradientVertical};
  height: 221px;
  width: 100%;
`;

const StyledLogo = styled(Img)`
  width: 121px;
  margin-left: 100px;
  position: relative;
  margin-top: 40px;
`;

const Header = () => (
  <StyledHeader>
    <StyledLogo
      src="/static/logo.svg"
      alt="MyBit's logo"
    />
    <NavigationBar />
  </StyledHeader>
)

export default Header;
