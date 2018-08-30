import { Menu as MenuAnt } from 'antd';
import MenuItem from '../MenuItem';
import Icon from '../Icon';
import SubMenu from '../SubMenu';
import StyledMenu from './StyledMenu';
import 'antd/lib/menu/style';

export default class Menu extends React.Component{

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
      <MenuItem key={subItem.name}>{subItem.name}</MenuItem>
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

  render(){
    const {onClick, items, selectedKeys, mode} = this.props;

    return(
      <StyledMenu>
        <MenuAnt
          onClick={onClick}
          selectedKeys={selectedKeys}
          mode={mode}
        >
          {items.map(this.getMenu)}
        </MenuAnt>
      </StyledMenu>
    )
  }
}
