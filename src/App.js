import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FullArticleContainer from './components/FullArticleContainer';
import TopicContainer from './components/TopicContainer';

function App() {
  return (
    <main className="App">
      <Header />
      <NavBar />
      <Router>
        <Home path="/" />
        <FullArticleContainer path="/articles/:article_id" />
        <TopicContainer path="/topics/:slug" />
      </Router>
    </main>
  );
}

export default App;
