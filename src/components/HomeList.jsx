import React from 'react';
import ArticleCard from './ArticleCard';

class HomeList extends React.Component {
  render() {
    return (
      <div className="HomeList">
        <ul>
          {this.props.topArticles.map(article => {
            return (
              <ArticleCard
                key={article.article_id}
                article={article}
                increaseVotes={this.props.increaseVotes}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default HomeList;
