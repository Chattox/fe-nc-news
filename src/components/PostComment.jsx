import React, { Component } from 'react';
import axios from 'axios';

class PostComment extends Component {
  state = { comment: '', user: this.props.user, error: false };

  componentDidUpdate() {
    if (this.state.user !== this.props.user) {
      this.setState({ user: this.props.user });
    }
  }

  handleInput = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.user !== '') {
      axios
        .post(
          `https://chattox-nc-news.herokuapp.com/api/articles/${this.props.article_id}/comments`,
          { username: this.state.user, body: this.state.comment }
        )
        .then(({ data }) => {
          this.props.postedComment(data.comment, 'post');
          this.setState({ error: false });
        });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div className="PostComment">
        <p>Post a comment:</p>
        <form onSubmit={this.handleSubmit}>
          <textarea
            name="comment"
            id="comment-box"
            cols="50"
            rows="5"
            onChange={this.handleInput}
            required
          />
          <br />
          <button>Submit</button>
        </form>
        {this.state.error ? <p>Must be logged in!</p> : null}
      </div>
    );
  }
}

export default PostComment;
