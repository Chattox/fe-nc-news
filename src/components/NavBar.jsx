import React from 'react';
import axios from 'axios';
import NavList from './NavList';

class NavBar extends React.Component {
  state = { topics: [], isLoaded: false };

  componentDidMount = () => {
    this.fetchTopics();
  };

  fetchTopics = () => {
    axios
      .get('https://chattox-nc-news.herokuapp.com/api/topics')
      .then(({ data }) => {
        this.setState({ topics: data, isLoaded: true });
      });
  };

  render() {
    return (
      <nav className="NavBar">
        {this.state.isLoaded ? (
          <NavList topics={this.state.topics.topics} />
        ) : (
          <p>Loading...</p>
        )}
      </nav>
    );
  }
}

export default NavBar;
