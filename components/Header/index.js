import PropTypes from 'prop-types';
import styled from 'styled-components'
import NavigationBar from '../NavigationBar';
import StyledLogo from './StyledLogo';
import StyledHeader from './StyledHeader';

const Header = ({styling, handleClickMobileMenu, sidebarOpen}) => (
  <StyledHeader
    backgroundColor={styling.colors.backgroundGradientVertical}
  >
    <StyledLogo
      src="/static/logo.svg"
      alt="MyBit's logo"
    />
    <NavigationBar
      styling={styling.menu}
      handleClickMobileMenu={handleClickMobileMenu}
      sidebarOpen={sidebarOpen}
    />
  </StyledHeader>
)

Header.propTypes = {
  styling: PropTypes.object.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  handleClickMobileMenu: PropTypes.func.isRequired,
};

export default Header;
