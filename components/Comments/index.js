import PropTypes from 'prop-types';
import StyledComments from './StyledComments';
import CommentCard from './CommentCard';
import React from 'react';
import Pagination from "../Pagination";
import StyledPagination from "./StyledPagination";
import Theme from '../Theme';

const getComment = (comment, index) => <CommentCard key={index} comment={comment} />;

export default class Comments extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentPage: 0,
      commentsFiltered: []
    }
  }

  setCommentsFiltered = () => {
    const {currentPage} = this.state;
    const {commentsPerPage, comments} = this.props;
    let startIndex = currentPage * commentsPerPage;
    let endIndex = (currentPage + 1) * commentsPerPage;
    this.setState({
      commentsFiltered: comments.slice(startIndex, endIndex)
    })
  };

  setCurrentPage = currentPage => {
    this.setState({currentPage});
  };

  render(){
    let commentsFiltered = undefined;
    let totalCommentsFiltered = 0;
    const {currentPage} = this.state;
    const {commentsPerPage, comments} = this.props;
    
    totalCommentsFiltered = comments.length;
    let startIndex = currentPage * commentsPerPage;
    let endIndex = (currentPage + 1) * commentsPerPage;
    commentsFiltered = comments.slice(startIndex, endIndex);

    return(
      <div>
        <StyledComments>
          {commentsFiltered.map(getComment)}
        </StyledComments>
        <StyledPagination>
          <Pagination
            onChange={(currentPage) => this.setCurrentPage(currentPage-1)}
            total={totalCommentsFiltered}
            current={currentPage+1}
            pageSize={commentsPerPage}
            defaultCurrent={1}
            styling={Theme.pagination}
          />
        </StyledPagination>
      </div>
    )
  }
};


Comments.propTypes = {
  comments:  PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
