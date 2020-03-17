import React from 'react';
import { Link } from '@reach/router';

class ArticleCard extends React.Component {
  state = {
    article: this.props.article
  };

  title = this.props.article.title;
  votes = this.props.article.votes;
  topic = this.props.article.topic;
  author = this.props.article.author;
  created_at = this.props.article.created_at;
  comment_count = this.props.article.comment_count;
  article_id = this.props.article.article_id;
  date = new Date(this.created_at).toLocaleString();

  render() {
    return (
      <li className="ArticleCard">
        <section className="art-card-upvotes">
          <button
            onClick={() => {
              this.props.upvote(this.article_id);
            }}
          >
            Updoot
          </button>
          <p>
            Votes: {this.votes}
            <br />
            Comments: {this.comment_count}
          </p>
        </section>
        <Link to={`/articles/${this.article_id}`}>
          <section className="art-card-main">
            <p>
              <strong>{this.title}</strong>
              <br />
              <i>
                Posted by {this.author} in {this.topic}
              </i>
            </p>
          </section>
        </Link>
        <section className="art-card-created-at">{this.date}</section>
      </li>
    );
  }
}

export default ArticleCard;
