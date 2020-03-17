import React from 'react';
import axios from 'axios';
import TopicList from './TopicList';
import ErrorPage from './errors/ErrorPage';

class TopicContainer extends React.Component {
  state = { topicArticles: [], isLoaded: false, error: null };

  componentDidMount = () => {
    this.fetchTopicArticles(this.props.slug);
  };

  componentDidUpdate = (oldProps, oldState) => {
    if (oldProps.slug !== this.props.slug) {
      this.fetchTopicArticles(this.props.slug);
    }
  };

  fetchTopicArticles = slug => {
    axios
      .get('https://chattox-nc-news.herokuapp.com/api/articles', {
        params: { topic: slug }
      })
      .then(({ data }) => {
        this.setState({ topicArticles: data.articles, isLoaded: true });
      })
      .catch(err => {
        this.setState({ error: err.response.status });
      });
  };
  // rerender with... new slug from
  render() {
    if (this.state.error) {
      return <ErrorPage status={this.state.error} />;
    } else {
      return (
        <div className="TopicContainer">
          {this.state.isLoaded ? (
            <TopicList topicArticles={this.state.topicArticles} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
    }
  }
}

export default TopicContainer;
