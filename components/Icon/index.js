import React from 'react';
import PropTypes from 'prop-types';
import { Icon as IconAnt } from 'antd';
import StyledIconRight from './StyledIconRight';

const Icon = ({isRight, type}) =>
  isRight ? <StyledIconRight type={type} />
  : <IconAnt type={type} />

Icon.propTypes = {
  isRight: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  isRight: false,
};

export default Icon;
