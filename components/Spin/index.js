import PropTypes from 'prop-types';
import {default as SpinAnt} from 'antd/lib/spin';
import 'antd/lib/spin/style';
import StyledSpin from './StyledSpin';

const Spin = ({size, styling}) =>
  <StyledSpin styling={styling}>
    <SpinAnt size={size} />
  </StyledSpin>

Spin.propTypes = {
  styling: PropTypes.object.isRequired,
  size: PropTypes.string,
};

Spin.defaultProps = {
  size: 'small',
};

export default Spin;
