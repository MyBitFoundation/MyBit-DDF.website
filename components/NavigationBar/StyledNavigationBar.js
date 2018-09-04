import styled from 'styled-components'

const StyledNavigationBar = styled.div`
  display: inline-block;
  position: absolute;
  right: 20px;
  top: 55px;

  li{
    font-size: 16px;
  }

  @media (max-width: 1100px) {
    .ant-menu-item{
      margin-right: 30px;
    }

    .ant-menu-submenu{
      margin-right: 30px;
    }
  }

  .navigation--is-desktop{
    @media (max-width: 996px) {
      display: none;
    }
  }

  .hamburger-button{
    display: none;
    position: relative;
    top: 20px;
    right: 60px;

    & img{
      width: 30px;

      @media (max-width: 850px) {
        width: 20px;
      }
    }

    @media (max-width: 996px) {
      display: block;
      right: 20px;
    }

    @media (max-width: 850px) {
      top: -15px;
    }
  }

`;

export default StyledNavigationBar;
