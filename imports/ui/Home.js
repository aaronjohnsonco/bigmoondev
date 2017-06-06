import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '/imports/api/messages/methods';

import GetStarted from './GetStarted';
import Footer from './Footer';

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="home_hero_container">
          <img src="images/logo.svg" alt="Logo" className="home_hero_container__img"/>
        </div>
        <div className="home_callout">
          <h2 className="home_callout__header">Let's build something great!</h2>
          <GetStarted/>
        </div>
        <Footer/>
      </div>
    );
  }
};
