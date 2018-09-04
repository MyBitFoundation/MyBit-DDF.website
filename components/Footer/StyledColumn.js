import styled, {css} from 'styled-components'

const StyledColumn = styled.div`
  text-align: ${props => props.styling.textAlign || "left"};
  margin: ${props => props.styling.margin || "0px 0px"};

  ${props => props.styling.hideAt && css`
      @media (max-width: ${props => props.styling.hideAt}) {
        display: none;
      }
  `}
`

export default StyledColumn;
