import styled, { injectGlobal } from 'styled-components'
import { Menu } from 'antd';
const SubMenuAnt = Menu.SubMenu;

injectGlobal`
  .ant-menu-submenu-title:hover{
    color: #fffff;
  }

  .ant-menu-submenu-title{
    color: #ffffff;
  }
`

const SubMenu = styled(SubMenuAnt)`
  margin-right: 50px;

  .ant-menu-submenu-title{
    padding: 0px 0px;
  }
`;

export default SubMenu;
