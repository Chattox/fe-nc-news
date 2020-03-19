import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FullArticleContainer from './components/FullArticleContainer';
import TopicContainer from './components/TopicContainer';
import ErrorPage from './components/errors/ErrorPage';
import LogIn from './components/LogIn';

class App extends React.Component {
  state = { userLoggedIn: '' };

  changeLoggedIn = event => {
    this.setState({ userLoggedIn: event.target.value });
  };

  render() {
    return (
      <main className="App">
        <header className="top-bar">
          <Header />
          <LogIn changeLoggedIn={this.changeLoggedIn} />
        </header>
        <NavBar />
        <Router>
          <Home path="/" />
          <FullArticleContainer
            path="/articles/:article_id"
            userLoggedIn={this.state.userLoggedIn}
          />
          <TopicContainer path="/topics/:slug" />
          <ErrorPage status={404} default />
        </Router>
      </main>
    );
  }
}

export default App;

/* 
  TO DO:
  - Styling
  - Cosmetic tweaks
*/
