import React, { Component } from 'react';

export default class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  handleSendMessage(e) {
    e.preventDefault();
    let name = this.refs.name.value.trim();
    let email = this.refs.email.value.trim();
    let content = this.refs.content.value.trim();
    const message = {
      name,
      email,
      content
    };

    Meteor.call('sendMessage', message, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('The message was sent.')
      }
    });

    ReactDOM.findDOMNode(this.refs.name).value = '';
    ReactDOM.findDOMNode(this.refs.email).value = '';
    ReactDOM.findDOMNode(this.refs.content).value = '';

  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSendMessage}>
        <div className="form_el">
          <input
            ref="name"
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="form_el">
          <input
            ref="email"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="form_el">
          <textarea
            ref="content"
            name="content"
            placeholder="Tell me about your project needs">
          </textarea>
        </div>
        <button type="submit" className="form_button">Send Message</button>
        <button type="reset" className="form_button_cancel">Reset</button>
        </form>
      </div>
    );
  }
};
