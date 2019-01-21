import React from 'react';
import StyledCommentCard from './StyledCommentCard';
import StyledAvatar from './StyledAvatar'
import StyledBody from './StyledBody'
import MarkdownGithub from 'react-markdown-github';

const CommentCard = ({comment}) => {
  const username = comment.node.author.login;
  const body = comment.node.body;
  return (
    <StyledCommentCard>
      <StyledAvatar>
        <img src={"https://avatars.githubusercontent.com/"+username} alt="" width={50}/>
      </StyledAvatar>
      <StyledBody>
        <div>
          <p>
            <strong>{username}</strong>
            &nbsp;commented on 3 Oct 2018
          </p>
        </div>

        <div>
          <p>
            <MarkdownGithub source={body} />
          </p>
        </div>
      </StyledBody>
    </StyledCommentCard>
  )
}

export default CommentCard;
