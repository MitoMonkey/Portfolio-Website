// 'use strict';
/* module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
}; */

// define the options for email and domain
const options = {
  mySender: process.env.SENDER, // email address enabled in AWS SES in the AWS Console
  myRecipient: process.env.RECIPIENT, // email address enabled in AWS SES in the AWS Console
  myDomain: process.env.DOMAIN // the domain of my website or '*' to accept requests from any domain
}

// initialize the function
const { sendJSON, sendFormEncoded } = require('./lambdaMailer')(options);

// Content-Type: application/json
// The event.body needs to be a JSON object with 3 properties
// - email
// - name
// - content
module.exports.sendJSON = sendJSON;

// Content-Type: application/x-www-form-urlencoded
// The event.body needs to a URI encoded string with 3 parameters
// - email
// - name
// - content
module.exports.sendFormEncoded = sendFormEncoded;
