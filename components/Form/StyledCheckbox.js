import styled from 'styled-components';

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
    box-sizing: border-box;
    padding: 0;
    position: absolute;
    margin-top: .3rem;
    margin-left: -1.25rem;
`;

export default StyledCheckbox;
