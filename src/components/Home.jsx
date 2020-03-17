import React from 'react';
import axios from 'axios';
import HomeList from './HomeList';

class Home extends React.Component {
  state = {
    topArticles: [],
    isLoaded: false,
    upvotedArticle: {}
  };

  componentDidMount = () => {
    this.fetchTopArticles();
  };

  componentDidUpdate(oldProps, oldState) {
    console.log('Old state');
    console.log(oldState.upvotedArticle);
    console.log('New state');
    console.log(this.state.upvotedArticle);

    if (oldState.upvotedArticle !== this.state.upvotedArticle) {
      console.log('Difference found, refetching articles');
      this.fetchTopArticles();
    }
  }

  fetchTopArticles = () => {
    axios
      .get('https://chattox-nc-news.herokuapp.com/api/articles', {
        params: {
          sort_by: 'votes',
          order: 'desc'
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

  render() {
    // console.log(this.state.upvotedArticle);
    return (
      <div className="Home">
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
