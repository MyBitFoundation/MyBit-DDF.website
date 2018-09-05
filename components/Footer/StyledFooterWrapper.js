import styled, {css} from 'styled-components'

const StyledFooterWrapper = styled.div`
  max-width: ${props => props.styling.maxWidth || ""};
  margin: 0 auto;
  padding: 0px 20px;

  h6{
    font-size: ${props => props.styling.titleSize || "18px"};
    font-weight: 500;
    line-height: 1.56;
    color: ${props => props.styling.titleColor || "#ffffff"};
    margin: 0px 0px;
  }

  p{
    font-size: ${props => props.styling.linkSize || "16px"};
    line-height: 1.75;
    color: ${props => props.styling.textColor || "#ffffff"};
    margin: 0px 0px;
  }

  a{
    display: block;
    font-size: ${props => props.styling.textSize || "16px"};
    line-height: 1.75;
    color: ${props => props.styling.linkColor || "#ffffff"};
    margin: 0px 0px;

    &:hover{
      color: ${props => props.styling.linkColorHover || "#ffffff"};
      cursor: pointer;
    }
  }

  ${props => props.styling.breakAt && css`
    @media (max-width: ${props => props.styling.breakAt}) {
      h6{
        margin-bottom: 20px;
      }

      h6:not(first-child) {
        margin-top: 20px;
      }
    }
  `}
`

export default StyledFooterWrapper;
