import styled from 'styled-components'
import { injectGlobal } from 'styled-components';
import Theme from '../Theme';

injectGlobal`
  .ant-dropdown-menu-item:hover,
  .ant-dropdown-menu-submenu-title:hover{
    background-color: ${Theme.dropdown.submenu.colorHover};
  }
`

const StyledDropdown = styled.div`
  .ant-dropdown-trigger{
    color: ${props => props.styling.trigger.color};

    &:hover{
      color: ${props => props.styling.trigger.colorHover};
    }
  }
`

export default StyledDropdown;
