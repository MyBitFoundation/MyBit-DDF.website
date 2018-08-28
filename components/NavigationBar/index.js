import React from 'react';
import { Menu } from 'antd';
import StyledNavigationBar from './StyledNavigationBar';
import MenuItem from '../MenuItem';
import Icon from '../Icon';
import SubMenu from '../SubMenu';
const MenuItemGroup = Menu.ItemGroup;
import 'antd/lib/menu/style';
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

  getMenuItem = (item) => {
    return (
      <MenuItem key={item.name}>
        {item.name}
      </MenuItem>
    )
  }

  getSubmenuItem = (item) => {
    const iconRight = item.iconRight ? <Icon type={item.iconRight} isRight />: null;
    const iconLeft = item.iconLeft ? <Icon type={item.iconLeft} />: null;
    const subItems = item.subNavigation.map(subItem => (
      <Menu.Item key={subItem.name}>{subItem.name}</Menu.Item>
    ));

    return(
      <SubMenu key={item.name} title={<span>{iconLeft}{item.name}{iconRight}</span>}>
        {subItems}
      </SubMenu>
    )
  }

  getMenu = (item) => {
    if(item.subNavigation){
      return this.getSubmenuItem(item);
    }
    else{
      return this.getMenuItem(item);
    }
  }

  render() {
    return (
      <StyledNavigationBar>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
        {navigationItems.map(item => {
          return this.getMenu(item);
        })}
        </Menu>
      </StyledNavigationBar>
    );
  }
}
