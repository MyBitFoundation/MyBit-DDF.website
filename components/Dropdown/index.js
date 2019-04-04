import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown as DropdownAnt, Icon } from 'antd';
import StyledDropdown from './StyledDropdown';

const getMenu = (menu, handleClick) => (
  <Menu>
    {menu.map(item => (
      <Menu.Item key={item} onClick={() => handleClick(item)}>
        <a>{item}</a>
      </Menu.Item>
    ))}
  </Menu>
);

const Dropdown = ({selected, menu, handleClick, placement, styling, trigger}) => (
  <StyledDropdown styling={styling}>
    <DropdownAnt
      overlay={getMenu(menu, handleClick)}
      placement={placement}
      trigger={[trigger]}
    >
      <span>
        {selected} <Icon type="down" />
      </span>
    </DropdownAnt>
  </StyledDropdown>
)

Dropdown.propTypes = {
  styling: PropTypes.object.isRequired,
  selected: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  placement: PropTypes.string.isRequired,
  trigger: PropTypes.string.isRequired,
};

export default Dropdown;
