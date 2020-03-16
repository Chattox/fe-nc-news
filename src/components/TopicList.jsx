import React from 'react';
import { Link } from '@reach/router';
import ArticleCard from './ArticleCard';

const TopicList = props => {
  // console.log(props);
  return (
    <div className="TopicList">
      <ul>
        {props.topicArticles.map(article => {
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

export default TopicList;
