import React from 'react';

const HomeList = props => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.topArticles.map(article => {
          return (
            <li key={article.article_id}>
              Title: {article.title} Created: {article.created_at}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeList;
