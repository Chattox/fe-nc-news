import React from 'react';

const FullArticle = props => {
  const {
    title,
    body,
    votes,
    topic,
    author,
    created_at,
    comment_count
  } = props.article;
  return (
    <div className="FullArticle">
      <h1>{title}</h1>
      <h3>
        <i>Written by {author}</i>
      </h3>
      <h5>
        <i>in {topic}</i>
      </h5>
      <br />
      <p>{body}</p>
      <p>
        <i>
          Upvotes: {votes} Comments: {comment_count}
        </i>
      </p>
    </div>
  );
};

export default FullArticle;
