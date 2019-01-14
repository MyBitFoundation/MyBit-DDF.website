import PropTypes from 'prop-types';
import StyledComments from './StyledComments';
import CommentCard from './CommentCard';

const getComment = (comment, index) => <CommentCard key={index} comment={comment} />;

const Comments = props => {
  return(
    <StyledComments>
      {props.comments.map(getComment)}
    </StyledComments>
  )
};

Comments.propTypes = {
  comments:  PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Comments;
