import React from 'react';
import axios from 'axios';
import TopicList from './TopicList';

class TopicContainer extends React.Component {
  state = { topicArticles: [], isLoaded: false };

  componentDidMount = () => {
    this.fetchTopicArticles(this.props.slug);
  };

  fetchTopicArticles = slug => {
    axios
      .get('https://chattox-nc-news.herokuapp.com/api/articles', {
        params: { topic: slug }
      })
      .then(({ data }) => {
        // console.log(data);
        this.setState({ topicArticles: data.articles, isLoaded: true });
      });
  };
  render() {
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

export default TopicContainer;
