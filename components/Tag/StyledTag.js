import styled from 'styled-components'

const StyledTag = styled.div`
    display: inline-block;

    .ant-tag-checkable{
      background-color: ${props => props.constants.tags.uncheckedState.backgroundColor};
      border-color: ${props => props.constants.tags.uncheckedState.borderColor};
      color: ${props => props.constants.tags.uncheckedState.color};

      &:hover{
        color: ${props => props.constants.tags.hoverState.color};
      }
    }

    .ant-tag-checkable-checked{
      background-color: ${props => props.constants.tags.checkedState.backgroundColor};
      color: ${props => props.constants.tags.checkedState.color};

      &:hover{
        color: ${props => props.constants.tags.checkedState.color};
      }
    }
`;

export default StyledTag;
