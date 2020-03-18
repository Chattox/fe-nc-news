import React, { Component } from 'react';

class LogIn extends Component {
  state = {
    users: [
      'jessjelly',
      'tickle122',
      'grumpy19',
      'happyamy2016',
      'cooljmessy',
      'weegembump'
    ]
  };

  render() {
    return (
      <div className="LogIn">
        <form>
          <label>
            Log In:
            <select defaultValue="default" onChange={this.props.changeLoggedIn}>
              <option value="default" disabled>
                Choose user
              </option>
              {this.state.users.map(user => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default LogIn;
