import React from 'react';
import axios from 'axios';
import HomeList from './HomeList';
import ArticleSort from './ArticleSort';

class Home extends React.Component {
  state = {
    topArticles: [],
    isLoaded: false,
    upvotedArticle: {},
    sortBy: 'votes',
    orderBy: 'desc'
  };

  componentDidMount = () => {
    this.fetchTopArticles();
  };

  componentDidUpdate(oldProps, oldState) {
    // console.log('Old state');
    // console.log(oldState.upvotedArticle);
    // console.log('New state');
    // console.log(this.state.upvotedArticle);

    if (oldState.upvotedArticle !== this.state.upvotedArticle) {
      // console.log('Difference found, refetching articles');
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

  upvote = article_id => {
    axios
      .patch(
        `https://chattox-nc-news.herokuapp.com/api/articles/${article_id}`,
        { inc_votes: 1 }
      )
      .then(({ data }) => {
        console.log('updoot');
        this.setState({ upvotedArticle: data.article });
      });
  };

  changeSortBy = sortByQuery => {
    this.setState({ sortBy: sortByQuery }, () => {
      console.log('hello this works');
      console.log(this.state.sortBy);
    });
  };

  toggleOrderBy = () => {
    if (this.state.orderBy === 'asc') {
      this.setState({ orderBy: 'desc' });
    } else {
      this.setState({ orderBy: 'asc' });
    }
  };

  render() {
    // console.log(this.state.upvotedArticle);
    return (
      <div className="Home">
        <ArticleSort
          changeSortBy={this.changeSortBy}
          toggleOrderBy={this.toggleOrderBy}
          orderBy={this.state.orderBy}
        />
        {this.state.isLoaded ? (
          <HomeList
            topArticles={this.state.topArticles.articles}
            upvote={this.upvote}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default Home;
