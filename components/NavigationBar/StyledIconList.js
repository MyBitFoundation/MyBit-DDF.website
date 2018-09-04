import styled from 'styled-components';
import { generateIconsCss } from './socialIcons';

const StyledIconList = styled.div`
  .IconList{
    position: fixed;
    bottom: 70px;
    left: 0px;
    transition: opacity 0.35s ease-out, transform 0.35s ease-out, visibility 0.35s ease-out;
    transform: scale(1.2) translateY(-180px);
    opacity: 0;
    transition-delay: 200ms;
    visibility: hidden;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    ${generateIconsCss()}

    .socialIcon__wrapper{
      width: 50px;
      height: 50px;
      background-size: contain;

      &:hover{
        background-size: contain;
      }

      @media (max-width: 700px) {
        width: 35px;
        height: 35px;
      }

      @media (max-width: 600px) {
        width: 30px;
        height: 30px;
      }

      @media (max-width: 470px) {
        width: 23px;
        height: 23px;
      }

      &:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 75px;
        height: 75px;
        transition: background 180ms;
        cursor: pointer;
      }
    }

    .socialIcon{
      margin: 0 20px;

      @media (max-width: 600px) {
        margin: 0px 15px;
      }

      @media (max-width: 470px) {
        margin: 0px 8px;
      }
    }
  }
`;


export default StyledIconList;
