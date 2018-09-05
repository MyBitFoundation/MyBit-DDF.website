import styled, { css } from 'styled-components'

const StyledAppWrapper = styled.div`
  ${props => props.isMenuOpen && css`
    max-height: 100vh;
    overflow: hidden;
    `
  }
`;

export default StyledAppWrapper;
