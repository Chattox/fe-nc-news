import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FullArticleContainer from './components/FullArticleContainer';
import TopicContainer from './components/TopicContainer';
import ErrorPage from './components/errors/ErrorPage';

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <Header />
        <NavBar />
        <Router>
          <Home path="/" />
          <FullArticleContainer path="/articles/:article_id" />
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
  - Make sure article cards look good on mobile; prob media query
  - User login stuff
  - Updoots and comments
  - Posting new articles
*/
