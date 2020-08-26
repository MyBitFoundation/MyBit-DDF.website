import styled from 'styled-components'
import {
  Switch,
} from 'antd';

const StyledSwitch = styled(Switch)`
  margin-top: 25px;
  display: block;

  @media (min-width: 768px) {
    display: inline-block;
    margin-top: -5px;
    margin-left: 20px;
  }
`;

export default StyledSwitch;
