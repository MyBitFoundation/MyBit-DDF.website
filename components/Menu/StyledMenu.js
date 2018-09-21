import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  .ant-menu-vertical{
    .ant-menu-item{
      width: 100%;
    }
  }
`

const StyledMenu = styled.div`
  .ant-menu{
    background-color: ${props => props.styling.backgroundColor};
    border: none;
    color: ${props => props.styling.color};
  }

  .ant-menu-item:hover{
    color: ${props => props.styling.itemHoverColor};
  }

  .ant-menu-item-selected{
    color: ${props => props.styling.itemSelectedColor};
    border-bottom: ${props => props.styling.borderBottom};
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{
    border-bottom: none;
    background-color: ${props => props.styling.backgroundColorItem};
  }
`;

export default StyledMenu;
