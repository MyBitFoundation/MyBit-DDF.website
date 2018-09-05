import styled from 'styled-components'

const StyledButtonChallenge = styled.div`
  position: relative;
  top: -20px;
  .ant-btn {
    font-size: 18px;
    font-weight: 500;
  }

  @media (max-width: 767px) {
    margin-top: 30px;
    top: 0px;
  }
`;

export default StyledButtonChallenge;
