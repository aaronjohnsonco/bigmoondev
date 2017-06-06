import { Meteor } from 'meteor/meteor';

import '/imports/api/messages/methods';


// Email.send({
//   to: "aaronjohnsonis@gmail.com",
//   from: 'aaron@bigmooncreative.com',
//   subject: 'This is a test email from Meteor',
//   text: 'Did it make it?'
// });

Meteor.startup(() => {
  process.env.MAIL_URL = "smtp://postmaster%40sandbox0e61c85862724f468b5f16d9429a795c.mailgun.org:37c0e2b63b4436adfd14ffa829d96282@smtp.mailgun.org:587"
});


// process.env.MAIL_URL = "smtp://postmaster%40<your-mailgun-address>.mailgun.org:password@smtp.mailgun.org:587";
