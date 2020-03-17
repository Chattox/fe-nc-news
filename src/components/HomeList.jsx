import React from 'react';
import { Link } from '@reach/router';
import ArticleCard from './ArticleCard';

const HomeList = props => {
  return (
    <div className="HomeList">
      <ul>
        {props.topArticles.map(article => {
          return (
            <ArticleCard
              key={article.article_id}
              article={article}
              upvote={props.upvote}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default HomeList;
