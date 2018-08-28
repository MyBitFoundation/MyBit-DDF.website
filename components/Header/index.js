import styled from 'styled-components'
import Constants from '../Constants';
import NavigationBar from '../NavigationBar';
import StyledLogo from './StyledLogo';
import StyledHeader from './StyledHeader';

const Header = () => (
  <StyledHeader
    backgroundColor={Constants.colors.backgroundGradientVertical}
  >
    <StyledLogo
      src="/static/logo.svg"
      alt="MyBit's logo"
    />
    <NavigationBar />
  </StyledHeader>
)

export default Header;
