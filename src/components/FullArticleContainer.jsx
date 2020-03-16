import React from 'react';
import axios from 'axios';
import FullArticle from './FullArticle';

class FullArticleContainer extends React.Component {
  state = { article: {}, isLoaded: false };

  componentDidMount = () => {
    this.fetchFullArticle(this.props.article_id);
  };

  fetchFullArticle = article_id => {
    axios
      .get(`https://chattox-nc-news.herokuapp.com/api/articles/${article_id}`)
      .then(({ data }) => {
        this.setState({ article: data.article, isLoaded: true });
      });
  };

  render() {
    return (
      <div className="FullArticleContainer">
        {this.state.isLoaded ? (
          <FullArticle article={this.state.article} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default FullArticleContainer;
