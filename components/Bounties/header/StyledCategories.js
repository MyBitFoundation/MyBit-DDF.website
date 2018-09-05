import styled from 'styled-components'

const StyledCategories = styled.div`
  li{
    color: #4a4a4a;
    font-size: 18px;
    font-weight: 500;
    margin-right: 70px;

    @media (max-width: 500px) {
      margin: 0px 0px;
    }
  }

  .categories-mobile{
    display:none;

    @media (max-width: 500px) {
      display: block;
    }
  }

  .categories-desktop{
    @media (max-width: 500px) {
      display: none;
    }
  }

`;

export default StyledCategories;
