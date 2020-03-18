import React from 'react';
import Upvote from './Upvote';

class CommentCard extends React.Component {
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
