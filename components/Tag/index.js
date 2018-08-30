import StyledTag from './StyledTag';
import { Tag as TagAnt } from 'antd';
import 'antd/lib/tag/style';
const { CheckableTag } = TagAnt;

const Tag = (props) => (
  <StyledTag {...props}>
   <CheckableTag {...props} />
  </StyledTag>
)

export default Tag;
