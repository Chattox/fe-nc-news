import React from 'react';

const CommentCard = props => {
  const date = new Date(props.comment.created_at).toLocaleString();
  return (
    <li className="CommentCard">
      <section className="com-card-upvotes">
        <p>Votes: {props.comment.votes}</p>
      </section>
      <section className="com-card-main">
        <h5>{props.comment.author}</h5>
        <p>{props.comment.body}</p>
      </section>
      <section className="com-card-created-at">{date}</section>
    </li>
  );
};

export default CommentCard;
