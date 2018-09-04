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

    &__overlay-link{
      text-decoration: none;
      color: inherit;
      position: relative;
      font-family: 'Roboto';
      font-size: 23px;
      color: #ffffff;
      display: block;
      width: max-content;
      margin-bottom: 18px;
      transition: opacity 0.35s ease-out, transform 0.35s ease-out, visibility 0.35s ease-out;;
      transform: scale(1.5) translateY(-30px);
      opacity: 0;
      visibility: hidden;
      margin-left: 30px;

      &:nth-child(2){
        transition-delay: 250ms;
        margin-top: 50px;
      }

      &:nth-child(3){
        transition-delay: 200ms;
      }

      &:nth-child(4){
        transition-delay: 150ms;
      }

      &:nth-child(5){
        transition-delay: 100ms;
      }

      &:nth-child(6){
        transition-delay: 50ms;
      }

      &--is-visible{
        transform: scale(1) translateY(50px);
        opacity: 1;
        visibility: visible;
      }

      &--is-visible:nth-child(2){
        transition-delay: 450ms;
      }

      &--is-visible:nth-child(3){
        transition-delay: 500ms;
      }

      &--is-visible:nth-child(4){
        transition-delay: 550ms;
      }

      &--is-visible:nth-child(5){
        transition-delay: 600ms;
      }

      &--is-visible:nth-child(6){
        transition-delay: 650ms;
      }
    }

    &__overlay-link:hover{
      color: #ffffff;
    }

    &__overlay-link:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -3px;
      left: 0;
      background-color: white;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }

    &__overlay-link:hover:after {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

export default StyledMobileMenu;
