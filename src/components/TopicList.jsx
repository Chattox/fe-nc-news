import React from 'react';
import ArticleCard from './ArticleCard';

const TopicList = props => {
  return (
    <div className="TopicList">
      <ul>
        {props.topicArticles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </div>
  );
};

export default TopicList;
