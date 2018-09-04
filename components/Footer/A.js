import styled from 'styled-components'

const A = styled.a`
  text-decoration: ${props => props.styling.textDecoration || "none"};
`

export default A;
