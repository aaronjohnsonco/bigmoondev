import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Email } from 'meteor/email';

Meteor.methods({
  sendMessage(message) {
    check(message, Object);

    Meteor.defer(() => {
      Email.send({
        to: 'aaronjohnsonis@gmail.com',
        from: `${message.name} ${message.email}`,
        subject: `${message.name} sent a message!`,
        text: message.content
      });
    });
  }
});
