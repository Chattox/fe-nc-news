import React, { Component } from 'react';

class ArticleSort extends Component {
  state = {
    sortBy: ''
  };

  handleInput = event => {
    this.setState({ sortBy: event.target.value }, () => {
      this.props.changeSortBy(this.state.sortBy);
    });
  };
  render() {
    return (
      <div className="ArticleSort">
        <form>
          <label>
            Sort by:
            <select
              defaultValue="votes"
              onChange={() => {
                this.handleInput(this.event.value);
              }}
            >
              <option value="created_at">Date</option>
              <option value="comment_count">Comment count</option>
              <option value="votes">Votes</option>
            </select>
          </label>
        </form>
        <button onClick={this.props.toggleOrderBy}>
          {this.props.orderBy === 'asc' ? 'Descending' : 'Ascending'}
        </button>
      </div>
    );
  }
}

export default ArticleSort;
