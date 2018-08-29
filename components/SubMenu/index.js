import styled from 'styled-components'
import { Menu } from 'antd';
const SubMenuAnt = Menu.SubMenu;

const SubMenu = styled(SubMenuAnt)`
  margin-right: 50px;

  .ant-menu-submenu-title{
    padding: 0px 0px;
  }
`;

export default SubMenu;
