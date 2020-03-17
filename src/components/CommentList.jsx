import React from 'react';
import CommentCard from './CommentCard';

const CommentList = props => {
  return (
    <div className="CommentList">
      <ul>
        {props.comments.map(comment => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </div>
  );
};

export default CommentList;
