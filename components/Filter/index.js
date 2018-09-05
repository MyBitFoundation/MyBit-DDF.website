import PropTypes from 'prop-types';
import StyledFilter from './StyledFilter';
import { Tag as TagAnt } from 'antd';
import 'antd/lib/tag/style';
const { CheckableTag } = TagAnt;

const Filter = props =>
  <StyledFilter styling={props.styling}>
   <CheckableTag {...props} />
  </StyledFilter>


Filter.propTypes = {
  styling: PropTypes.object.isRequired,
};

export default Filter;
