import PropTypes from 'prop-types';
import StyledNavigationBar from './StyledNavigationBar';
import Menu from '../Menu';
import Img from '../Img';
import { NavigationItems, MobileMenu } from '../../constants';
import SidebarMobile from './SidebarMobile';

export default class NavigationBar extends React.Component{
  state = {
    current: 'Developer',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key
    })
  }

  render() {
    const { styling } = this.props;

    //we can't just modify styling as that will have an effect on other styling of unrelated components
    const stylingCustom = Object.assign({}, styling);
    stylingCustom.itemSelectedColor = "#ffffff";

    return (
      <StyledNavigationBar styling={this.props.styling}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          items={NavigationItems}
          styling={stylingCustom}
          className="navigation--is-desktop"
        />
        <div
          className="hamburger-button"
        >
          <a onClick={() => this.props.handleClickMobileMenu(true)}>
            <Img
              src={"static/menu-icon.svg"}
              alt="Mobile menu button"
            />
          </a>
        </div>
      <SidebarMobile
        open={this.props.sidebarOpen}
        closePopup={this.props.handleClickMobileMenu}
        links={MobileMenu}
      />

      </StyledNavigationBar>
    );
  }
}

NavigationBar.propTypes = {
  styling: PropTypes.object.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  handleClickMobileMenu: PropTypes.func.isRequired,
};
