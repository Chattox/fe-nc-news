import React from 'react';
import CommentCard from './CommentCard';

const CommentList = props => {
  return (
    <div className="CommentList">
      <ul>
        {props.comments.map(comment => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              deletedComment={props.deletedComment}
              user={props.user}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default CommentList;
