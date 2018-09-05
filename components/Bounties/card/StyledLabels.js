import styled from 'styled-components'

const StyledLabels = styled.div`
  display: inline-block;

  @media (max-width: 850px) {
    display: block;

    span:nth-child(1){
      .ant-divider{
        display: none;
      }
    }
  }

`;

export default StyledLabels;
