import styled, {css} from 'styled-components'

const StyledFooter = styled.footer`
  background: ${props => props.styling.backgroundColor};
  padding: ${props => props.styling.padding || "40px"};
  padding-bottom: 0px;

  ${props => props.styling.breakAt && css`
    @media (max-width: ${props => props.styling.breakAt}) {
      padding: 0px;
    }
  `}
`

export default StyledFooter;
