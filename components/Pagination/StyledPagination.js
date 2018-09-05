import styled from 'styled-components'

const StyledPagination = styled.div`
  .ant-pagination-item a  {
    color: ${props => props.styling.color}
  }

  .ant-pagination-item{
    border: ${props => props.styling.borderColor}
    background-color: ${props => props.styling.backgroundColor}
  }
  .ant-pagination-item-active{
    border-color: ${props => props.styling.itemActiveBorderColor}
  }

  .ant-pagination-item:hover{
    border-color: ${props => props.styling.itemHoverBorderColor}
  }

  .ant-pagination-disabled a{
    border-color: ${props => props.styling.disabledItemBorderColor}
    color: ${props => props.styling.disabledItemColor}
  }
`

export default StyledPagination;
