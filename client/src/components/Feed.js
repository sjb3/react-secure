import React, { Component, Fragment } from 'react';
import axios from 'axios';
import FeedItem from './FeedItem';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: []
    }
  }

  componentWillMount() {
    const { getAccessToken } = this.props.auth;
    const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
    const url = 'http://localhost:4000/courses';
    return axios.get(url, { headers })
                .then(res => this.setState({ feeds: res.data }));
  }

  login() {
    this.props.auth.login();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        {
          <h4>
            you are not logged in, Please {' '}
            <a
              style={{ cursor: 'pointer' }}
              onClick={this.login.bind(this)}
            >Log in</a>
            {' '}to continue
          </h4>
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
