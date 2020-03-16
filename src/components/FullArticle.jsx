import React from 'react';

const FullArticle = props => {
  const { title, body, votes, topic, author, created_at } = props.article;
  return (
    <div className="FullArticle">
      <h1>{title}</h1>
      <h3>
        <i>Written by {author}</i>
      </h3>
      <br />
      <p>{body}</p>
    </div>
  );
};

export default FullArticle;
