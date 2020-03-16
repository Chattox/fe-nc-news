import React from 'react';

const ArticleCard = props => {
  const {
    article_id,
    title,
    votes,
    topic,
    author,
    created_at,
    comment_count
  } = props.article;

  const date = new Date(created_at).toLocaleString();
  // console.log(date.toLocaleString());

  return (
    <li className="ArticleCard">
      <section className="art-card-upvotes">
        <p>
          Votes: {votes}
          <br />
          Comments: {comment_count}
        </p>
      </section>
      <section className="art-card-main">
        <p>
          <strong>{title}</strong>
          <br />
          <i>
            Posted by {author} in {topic}
          </i>
        </p>
      </section>
      <section className="art-card-created-at">{date}</section>
    </li>
  );
};

export default ArticleCard;
