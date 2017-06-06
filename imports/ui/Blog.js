import React, { Component } from 'react';
import Posts from './Posts';

export default class Blog extends Component {
  render() {
    return (
      <div>
        <h2>This is the Blog Component</h2>
        <Posts/>
      </div>
    );
  }
};
