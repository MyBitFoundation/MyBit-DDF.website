import React from 'react';
import StyledNavigationBar from './StyledNavigationBar';
import Menu from '../Menu';
import { navigationItems } from '../../constants';

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
    return (
      <StyledNavigationBar>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          items={navigationItems}
        />
      </StyledNavigationBar>
    );
  }
}
