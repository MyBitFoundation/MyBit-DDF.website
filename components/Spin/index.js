import PropTypes from 'prop-types';
import 'antd/lib/spin/style';
import StyledSpin from './StyledSpin';

const Spin = ({size, styling}) =>
  <StyledSpin styling={styling}>
    <img
      src="/static/spin.svg"
      style={{width: (size == 'large' ? '64px' : '32px')}}
      alt="Loading animation"
    />
  </StyledSpin>

Spin.propTypes = {
  styling: PropTypes.object.isRequired,
  size: PropTypes.string,
};

Spin.defaultProps = {
  size: 'small',
};

export default Spin;
