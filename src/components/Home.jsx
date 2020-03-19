import React from 'react';
import axios from 'axios';
import HomeList from './HomeList';
import ArticleSort from './ArticleSort';

class Home extends React.Component {
  state = {
    topArticles: [],
    isLoaded: false,
    upvoted: {},
    sortBy: 'votes',
    orderBy: 'desc'
  };

  componentDidMount = () => {
    this.fetchTopArticles();
  };

  componentDidUpdate(oldProps, oldState) {
    if (oldState.upvoted !== this.state.upvoted) {
      this.fetchTopArticles();
    }

    if (oldState.sortBy !== this.state.sortBy) {
      this.fetchTopArticles();
    }

    if (oldState.orderBy !== this.state.orderBy) {
      this.fetchTopArticles();
    }
  }

  fetchTopArticles = () => {
    axios
      .get('https://chattox-nc-news.herokuapp.com/api/articles', {
        params: {
          sort_by: this.state.sortBy,
          order: this.state.orderBy
        }
      })
      .then(({ data }) => {
        this.setState({ topArticles: data, isLoaded: true });
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

  render() {
    return (
      <div className="Home">
        <ArticleSort
          changeSortBy={this.changeSortBy}
          toggleOrderBy={this.toggleOrderBy}
          orderBy={this.state.orderBy}
        />
        {this.state.isLoaded ? (
          <HomeList topArticles={this.state.topArticles.articles} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default Home;
