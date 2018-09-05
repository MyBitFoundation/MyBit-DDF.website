import styled from 'styled-components'

const StyledSpin = styled.span`
  .ant-spin-dot i{
    background-color: ${props => props.styling.color};
  }
`

export default StyledSpin;
