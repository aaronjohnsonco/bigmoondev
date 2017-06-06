import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    Meteor.loginWithPassword({email}, password, () => {
      console.log('Login Callback', err);
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input ref="email" type="email" name="email" placeholder="Email"/>
        <input ref="password" type="password" name="password" placeholder="Password"/>
        <button>Login</button>
      </form>
    );
  }

};
