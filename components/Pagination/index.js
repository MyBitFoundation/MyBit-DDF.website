import React from 'react';
import PropTypes from 'prop-types';
import {default as PaginationAnt} from 'antd/lib/pagination';
import StyledPagination from './StyledPagination';

const Pagination = (props) => (
  <StyledPagination styling={props.styling}>
    <PaginationAnt {...props} />
  </StyledPagination>
)

Pagination.propTypes = {
  styling: PropTypes.object.isRequired,
};

export default Pagination;
