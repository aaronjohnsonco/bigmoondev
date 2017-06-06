import React, { Component } from 'react';

import Post from './Post';

export default class Posts extends Component {
  render() {
    return (
      <div>
        <h1 className="header">This is the Posts Component.</h1>
        <Post/>
      </div>
    );
  }
};
