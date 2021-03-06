import React from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import PostComment from './PostComment';

class FullArticle extends React.Component {
  state = {
    comments: [],
    newComment: {}
  };
  article_id = this.props.article.article_id;
  title = this.props.article.title;
  body = this.props.article.body;
  votes = this.props.article.votes;
  topic = this.props.article.topic;
  author = this.props.article.author;
  created_at = this.props.article.created_at;
  comment_count = this.props.article.comment_count;
  date = new Date(this.created_at).toLocaleString();

  componentDidMount() {
    this.getComments(this.article_id);
  }

  componentDidUpdate(oldProps, oldState) {
    if (oldState.newComment !== this.state.newComment) {
      this.getComments(this.article_id);
    }
  }

  getComments = article_id => {
    axios
      .get(
        `https://chattox-nc-news.herokuapp.com/api/articles/${article_id}/comments`
      )
      .then(({ data }) => {
        this.setState({ comments: data.comments });
      });
  };

  changeComment = (comment, action) => {
    if (action === 'post') {
      this.comment_count++;
      this.setState({ newComment: comment });
    } else if (action === 'delete') {
      this.comment_count--;
      this.setState({ newComment: comment });
    }
  };

  render() {
    return (
      <div className="FullArticle">
        <h1>{this.title}</h1>
        <h3>
          <i>Written by {this.author}</i>
        </h3>
        <h5>
          <i>
            in {this.topic}, posted on {this.date}
          </i>
        </h5>
        <br />
        <p>{this.body}</p>
        <p>
          <i>
            Upvotes: {this.votes} Comments: {this.comment_count}
          </i>
        </p>
        <PostComment
          user={this.props.userLoggedIn}
          article_id={this.article_id}
          postedComment={this.changeComment}
        />
        <CommentList
          comments={this.state.comments}
          user={this.props.userLoggedIn}
          deletedComment={this.changeComment}
        />
      </div>
    );
  }
}

export default FullArticle;
