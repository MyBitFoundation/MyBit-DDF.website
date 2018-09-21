import styled from 'styled-components'

const StyledColumnSection = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  ${props => props.styling}
`

export default StyledColumnSection;
