import React from 'react';
import { Link } from '@reach/router';
import ArticleCard from './ArticleCard';

const HomeList = props => {
  return (
    <div className="HomeList">
      <ul>
        {props.topArticles.map(article => {
          return (
            <Link
              key={article.article_id}
              to={`/articles/${article.article_id}`}
            >
              <ArticleCard article={article} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeList;
