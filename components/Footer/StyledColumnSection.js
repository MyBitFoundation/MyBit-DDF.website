import styled from 'styled-components'

const StyledColumnSection = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: ${props => props.styling.breakAt || "900px"}) {
    flex-direction: column;
  }
`

export default StyledColumnSection;
