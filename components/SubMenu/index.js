import React from 'react';
import styled from 'styled-components'
import { Menu } from 'antd';
const SubMenuAnt = Menu.SubMenu;

const SubMenu = styled(SubMenuAnt)`
  margin-right: 50px;

  .ant-menu-submenu-title{
    padding: 0px 0px;
  }

  .ant-menu-submenu-title:hover{
    color: ${props => props.styling ? props.styling.color : "inherit"};
  }

  .ant-menu-submenu-title{
   color: ${props => props.styling ? props.styling.color : "inherit"};
  }

`;

export default SubMenu;
