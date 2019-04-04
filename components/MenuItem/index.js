import React from 'react';
import styled from 'styled-components'
import { Menu } from 'antd';

const MenuItem = styled(Menu.Item)`
  margin-right: 50px;
  padding: 0px 0px;

  a{
    color: ${props => props.styling ? props.styling.color : "inherit"} !important;

    &:hover{
      color:${props => props.styling ? props.styling.itemSelectedColor : "inherit"} !important;
    }
  }
`;

export default MenuItem;
