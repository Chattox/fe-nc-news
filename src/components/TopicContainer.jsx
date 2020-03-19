import React from 'react';
import axios from 'axios';
import TopicList from './TopicList';
import ArticleSort from './ArticleSort';
import ErrorPage from './errors/ErrorPage';

class TopicContainer extends React.Component {
  state = {
    topicArticles: [],
    isLoaded: false,
    sortBy: 'votes',
    orderBy: 'desc',
    error: null
  };

  componentDidMount = () => {
    this.fetchTopicArticles(this.props.slug);
  };

  componentDidUpdate = (oldProps, oldState) => {
    if (oldProps.slug !== this.props.slug) {
      this.fetchTopicArticles(this.props.slug);
    }
    if (oldState.sortBy !== this.state.sortBy) {
      this.fetchTopicArticles();
    }
    if (oldState.orderBy !== this.state.orderBy) {
      this.fetchTopicArticles();
    }
  };

  fetchTopicArticles = slug => {
    axios
      .get('https://chattox-nc-news.herokuapp.com/api/articles', {
        params: {
          topic: slug,
          sort_by: this.state.sortBy,
          order: this.state.orderBy
        }
      })
      .then(({ data }) => {
        this.setState({ topicArticles: data.articles, isLoaded: true });
      })
      .catch(err => {
        this.setState({ error: err.response.status });
      });
  };

  changeSortBy = sortByQuery => {
    this.setState({ sortBy: sortByQuery });
  };

  toggleOrderBy = () => {
    if (this.state.orderBy === 'asc') {
      this.setState({ orderBy: 'desc' });
    } else {
      this.setState({ orderBy: 'asc' });
    }
  };

  // rerender with... new slug from
  render() {
    if (this.state.error) {
      return <ErrorPage status={this.state.error} />;
    } else {
      return (
        <div className="TopicContainer">
          <ArticleSort
            changeSortBy={this.changeSortBy}
            toggleOrderBy={this.toggleOrderBy}
            orderBy={this.state.orderBy}
          />
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
