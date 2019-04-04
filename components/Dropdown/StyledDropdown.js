import styled from 'styled-components'
import Theme from '../Theme';

const StyledDropdown = styled.div`
  .ant-dropdown-trigger{
    color: ${props => props.styling.trigger.color};

    &:hover{
      color: ${props => props.styling.trigger.colorHover};
    }
  }
`

export default StyledDropdown;
