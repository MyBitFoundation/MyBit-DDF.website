import styled from 'styled-components'

const StyledFilter = styled.div`
    display: inline-block;
    margin-top: 10px;

    .ant-tag-checkable{
      background-color: ${props => props.styling.uncheckedState.backgroundColor};
      border-color: ${props => props.styling.uncheckedState.borderColor};
      color: ${props => props.styling.uncheckedState.color};

      &:hover{
        color: ${props => props.styling.hoverState.color};
      }
    }

    .ant-tag-checkable-checked{
      background-color: ${props => props.styling.checkedState.backgroundColor};
      color: ${props => props.styling.checkedState.color};
      border-color: ${props => props.styling.checkedState.borderColor};

      &:hover{
        color: ${props => props.styling.checkedState.color};
      }
    }
`;

export default StyledFilter;
