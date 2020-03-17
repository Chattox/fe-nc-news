import React from 'react';
import axios from 'axios';
import FullArticle from './FullArticle';
import ErrorPage from './errors/ErrorPage';

class FullArticleContainer extends React.Component {
  state = { article: {}, isLoaded: false, error: null };

  componentDidMount = () => {
    this.fetchFullArticle(this.props.article_id);
  };

  fetchFullArticle = article_id => {
    axios
      .get(`https://chattox-nc-news.herokuapp.com/api/articles/${article_id}`)
      .then(({ data }) => {
        this.setState({ article: data.article, isLoaded: true });
      })
      .catch(err => {
        this.setState({ error: err.response.status });
      });
  };

  render() {
    if (this.state.error) {
      return <ErrorPage status={this.state.error} />;
    } else {
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
}

export default FullArticleContainer;
