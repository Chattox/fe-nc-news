import React, { Component } from 'react';
import axios from 'axios';

class Upvote extends Component {
  upvote = (id, type) => {
    // console.log('updoot');
    if (type === 'article') {
      console.log('article');
      axios
        .patch(`https://chattox-nc-news.herokuapp.com/api/articles/${id}`, {
          inc_votes: 1
        })
        .then(({ data }) => {
          this.props.increaseVotes();
        });
    } else if (type === 'comment') {
      console.log('comment');
      axios
        .patch(`https://chattox-nc-news.herokuapp.com/api/comments/${id}`, {
          inc_votes: 1
        })
        .then(({ data }) => {
          this.props.increaseVotes();
        });
    }
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.upvote(this.props.id, this.props.type);
          }}
        >
          Updoot
        </button>
      </div>
    );
  }
}

export default Upvote;
