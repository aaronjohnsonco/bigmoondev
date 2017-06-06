import React, { Component } from 'react';

import ContactForm from './ContactForm';

export default class GetStarted extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    };
    this.handleGetStartedButtonClick = this.handleGetStartedButtonClick.bind(this);
  }

  handleGetStartedButtonClick() {
    this.setState({
      isHidden: true
    });
  }

  handleCancelButtonClick() {
    this.setState({
      isHidden: false
    });
  }

  render() {
    const isHidden = this.state.isHidden;

    let formEl = null;

    if (isHidden) {
      formEl = <ContactForm />;
    } else {
      formEl = <button onClick={this.handleGetStartedButtonClick} className="home_callout__button">Get Started</button>;
    }

    return (
      <div>
        {formEl}
      </div>

    );
  }
};
