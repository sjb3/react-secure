// @flow
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from './Jumbotron';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      jumbotronTitle: "List of courses"
    }
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          !isAuthenticated() && (
            <Fragment>
              <div className="header">
                <ul className="nav nav-pills pull-right">
                  <li className="btn btn-primary" onClick={this.login.bind(this)}>Log In</li>
                </ul>
                  <h3 className="text-muted">Securing React</h3>
              </div>
              <Jumbotron title={this.state.jumbotronTitle} />
              </Fragment>
          )
        }
        {
          isAuthenticated() && (
            <Fragment>
              <div className="header">
                <ul className="nav nav-pills pull-right">
                  <li><a onClick={this.goTo.bind(this, 'feed')}>Home</a></li>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
                  <li className="btn btn-primary" onClick={this.logout.bind(this)}>Log Out</li>

                </ul>
                  <h3 className="text-muted">Securing React</h3>
              </div>
              <Jumbotron title={this.state.jumbotronTitle} />
              </Fragment>
          )
        }
      </div>

    )
  }
}

export default App;
