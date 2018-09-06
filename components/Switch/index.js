import PropTypes from 'prop-types';
import { Switch as SwitchAnt } from 'antd';
import 'antd/lib/switch/style';
import Icon from '../Icon';
import StyledSwitch from './StyledSwitch';

const Switch = props =>
  <StyledSwitch styling={props.styling}>
    <SwitchAnt
      checkedChildren={<Icon type="check" />}
      unCheckedChildren={<Icon type="cross" />}
      checked={props.checked}
      size={props.size}
      onChange={props.onChange}
    />
  </StyledSwitch>

Switch.propTypes = {
  styling: PropTypes.object.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.bool.isRequired,
  size: PropTypes.string,
};

Switch.defaultProps = {
  size: 'small',
};

export default Switch;
