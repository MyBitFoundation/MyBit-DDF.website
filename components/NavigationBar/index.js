import React from 'react';
import { Menu } from 'antd';
import StyledNavigationBar from './StyledNavigationBar';
import MenuItem from '../MenuItem';
import Icon from '../Icon';
import SubMenu from '../SubMenu';
import 'antd/lib/menu/style';
import { navigationItems } from '../../constants';
const MenuItemGroup = Menu.ItemGrou;

export default class NavigationBar extends React.Component{

  state = {
    current: 'Developer',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key
    })
  }

  getMenuItem = (item) => {
    return (
      <MenuItem key={item.name}>
        {item.name}
      </MenuItem>
    )
  }

  getSubmenuItem = (item) => {
    const iconRight = item.iconRight && <Icon type={item.iconRight} isRight />;
    const iconLeft = item.iconLeft && <Icon type={item.iconLeft} />;
    const subItems = item.subNavigation.map(subItem => (
      <Menu.Item key={subItem.name}>{subItem.name}</Menu.Item>
    ));

    return(
      <SubMenu key={item.name} title={<span>{iconLeft}{item.name}{iconRight}</span>}>
        {subItems}
      </SubMenu>
    )
  }

  getMenu = (item) =>
    item.subNavigation ?
      this.getSubmenuItem(item) : this.getMenuItem(item);

  render() {
    return (
      <StyledNavigationBar>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
        {navigationItems.map(this.getMenu)}
        </Menu>
      </StyledNavigationBar>
    );
  }
}
