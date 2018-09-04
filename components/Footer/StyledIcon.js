import styled, {css} from 'styled-components'

const StyledIcon = styled.div`
  width: ${props => props.styling.width || "30px"};
  height: ${props => props.styling.height || "30px"};
  position: ${props => props.styling.position || ""};
  left: ${props => props.styling.left || "0px"};
  transform: ${props => props.styling.transform};
  margin-bottom: 10px;
  background-repeat: no-repeat;

  background: url(${props => props.src});

  ${props => props.srcHover && css`
    &:hover{
      background: url(${props => props.srcHover});
    }
  `}
`

export default StyledIcon;

