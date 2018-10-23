import styled from 'styled-components';

const StyledWelcome = styled.div`
  padding: 50px 100px 20px 100px;
  border-radius: 4px;
  box-shadow: 0 4px 12px 0 rgba(0,0,0,0.1);
  position: fixed;
  z-index: 2;
  background-color: #ffffff;
  margin: 0 auto;
  left: 50%;
  transform: translate(-50%, 0%);
  top: 10%;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  max-width: 850px;
  width: 100%;

  p{
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
    padding: 50px 50px 20px 50px;
    left: 0%;
    transform: translate(0%, 0%);
    top: 100px;
  }

  @media (max-width: 900px) {
    padding: 50px 10px 20px 10px;
  }

  @media (max-width: 768px) {
    border-radius: 0px;
    position: absolute;
  }

  & .title{
    font-size: 20px;
    font-family: 'Gilroy';
  }

  & .medium-font{
    font-weight: 500;
  }

  & .ant-btn{
    font-size: 20px;
    font-weight: 500;
    padding-left: 30px;
    padding-right: 30px;
    height: 48px;
    margin-top: 7px;
  }

  & .checkmark::before{
    background: url(/static/checkmark.svg) no-repeat center;
    width: 14px;
    height: 14px;
    content: ' ';
    background-size: contain;
    display: inline-block;
    margin-right: 10px;
  }

  a:focus{
    text-decoration: none;
  }
`;

export default StyledWelcome;
