import React from 'react';
import PropTypes from 'prop-types';
import StyledFilter from './StyledFilter';
import { Tag as TagAnt } from 'antd';
const { CheckableTag } = TagAnt;

const Filter = props =>
  <StyledFilter styling={props.styling}>
   <CheckableTag {...props} />
  </StyledFilter>


Filter.propTypes = {
  styling: PropTypes.object.isRequired,
};

export default Filter;
