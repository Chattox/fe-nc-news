import React from 'react';
import axios from 'axios';
import HomeList from './HomeList';

class Home extends React.Component {
  state = {
    topArticles: [],
    isLoaded: false
  };

  componentDidMount = () => {
    this.fetchTopArticles();
  };

  fetchTopArticles = () => {
    axios
      .get('https://chattox-nc-news.herokuapp.com/api/articles', {
        params: {
          sort_by: 'votes',
          order: 'desc'
        }
      })
      .then(({ data }) => {
        console.log(data);
        this.setState({ topArticles: data, isLoaded: true });
      });
  };

  render() {
    return (
      <div>
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
