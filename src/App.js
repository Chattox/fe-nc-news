import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import FullArticleContainer from './components/FullArticleContainer';

function App() {
  return (
    <main className="App">
      <Header />
      <NavBar />
      <Router>
        <Home path="/" />
        <FullArticleContainer path="/articles/:article_id" />
      </Router>
    </main>
  );
}

export default App;
