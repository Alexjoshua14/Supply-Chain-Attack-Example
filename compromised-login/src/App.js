import './App.css';
import React from 'react';
import { /*printHello,*/ validateUser } from 'validator-pkg';

class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: '',
          validated: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.logout = this.logout.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit() {
    console.log(this.state.username);
    console.log(this.state.password);
    const valid = validateUser(this.state.username, this.state.password);
    if (valid) {
      this.setState({
        validated: true
      });
      console.log("Logged In :)")
    }
  }

  logout() {
    this.setState({
      username: '',
      password: '',
      validated: false
    });
    console.log(this.state.validated);
  }

  render() {
    if (!this.state.validated) {
      return (
        <div>
          <h1>Please log in</h1>
          <form onSubmit={this.handleSubmit}>
              <label>Username: </label>
              <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
              <br/>
              <br/>
              <label>Password: </label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              <br/>
              <input type="submit" value="Submit" />
          </form>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Welcome {this.state.username}!</h1>
          <button onClick={this.logout}>Log out.</button>
        </div>
      )
    }
  }
}

class App extends React.Component {

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <Login />
          </header>
        </div>
      );
  }
}

export default App;
