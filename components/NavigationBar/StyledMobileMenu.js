import styled from 'styled-components';

const StyledMobileMenu = styled.div`

  .SidebarMobile {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    z-index: 10000;
    height: 0px;
    visibility: visible;
    opacity: 1;
    transition: height 0.35s ease-in 200ms;
    overflow: hidden;

    &:before{
      position: absolute;
      content: ' ';
      right: 0;
      left: 0;
      width: 105%;
      margin: 0 auto;
      height: 0px;
      background-size: cover;
      background: url('/static/mobile-bg.svg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      top: 0px;
      visibility: visible;
      opacity: 1;
      transition: height 0.35s ease-in 200ms;
    }

    & .IconList{
      transition: height 0.1 ease-in 100ms;
      transform: scale(1) translateY(-500px) !important;
    }


    &--is-visible{
      height: 102vh;

      &:before{
        height: 100vh;
      }

      & .IconList{
        transform: scale(1) translateY(50px) !important;
        opacity: 1 !important;
        transition-delay: 400ms !important;
        visibility: visible !important;
      }
    }

    &__overlay-btn-close {
      position: absolute;
      top: 20px;
      right: 30px;
      font-size: 50px;
      font-weight: bold;
      text-decoration: none;
      color: #fff;
      cursor: pointer;
      z-index: 2;
      opacity: 0;
      transform: rotate(-90deg) scale(0.5);
      transition: transform 0.25s linear 200ms, opacity 0.25s linear 200ms, visibility 0.25s linear 200ms !important;
      visibility: hidden;

      &--is-visible{
        visibility: visible;
        opacity: 1;
        transform: rotate(0deg) scale(1);
      }
    }

    .ant-menu:nth-child(1){
      margin-top: 50px;
    }

    .ant-menu-sub li{
      margin-bottom: 5px;
    }

    .ant-menu-item,
    .ant-menu-submenu-title{
      text-decoration: none;
      position: relative;
      font-family: 'Roboto';
      font-size: 20px;
      display: block;
      width: max-content;
      margin-left: 30px;
    }

    .ant-menu-item,
    .ant-menu-submenu-title{
        opacity: 1;
        visibility: visible;
      }
    }

    .ant-menu-sub .ant-menu-item[role="menuitem"]{
      font-size: 16px;
    }

    .ant-menu-submenu-title{
      background-color: transparent;
    }

    .ant-menu-submenu-arrow{
      display: none;
    }
  }
`;

export default StyledMobileMenu;
