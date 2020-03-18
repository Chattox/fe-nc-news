import React from 'react';
import Upvote from './Upvote';
import axios from 'axios';

class CommentCard extends React.Component {
  state = { error: false };
  comment_id = this.props.comment.comment_id;
  author = this.props.comment.author;
  votes = this.props.comment.votes;
  created_at = this.props.comment.created_at;
  body = this.props.comment.body;
  date = new Date(this.created_at).toLocaleString();

  increaseVotes = () => {
    this.votes++;
    this.setState({ [this.state]: this.state });
  };

  deleteComment = () => {
    if (this.props.user === this.author) {
      axios
        .delete(
          `https://chattox-nc-news.herokuapp.com/api/comments/${this.comment_id}`
        )
        .then(() => {
          this.props.deletedComment(this.props.comment);
        });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <li className="CommentCard">
        <section className="com-card-upvotes">
          <Upvote
            id={this.comment_id}
            type={'comment'}
            increaseVotes={this.increaseVotes}
          />
          <p>Votes: {this.votes}</p>
          <button onClick={this.deleteComment}>Delete</button>
          {this.state.error ? <p>Wrong user!</p> : null}
        </section>
        <section className="com-card-main">
          <h5>{this.author}</h5>
          <p>{this.body}</p>
        </section>
        <section className="com-card-created-at">{this.date}</section>
      </li>
    );
  }
}

export default CommentCard;
