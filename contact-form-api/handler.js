'use strict';

const aws = require('aws-sdk')
const ses = new aws.SES()

const mySender = process.env.SENDER; // email address 1 enabled in AWS SES in the AWS Console
const myRecipient = process.env.RECIPIENT; // email address enabled in AWS SES in the AWS Console
const myDomain = process.env.DOMAIN; // the domain of my website or '*' to accept requests from any domain
const myDomain_www = process.env.DOMAIN_WWW; // because the URL can be with or without www

function generateResponse(code, payload) {
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': '*',
      //'Access-Control-Allow-Headers': 'x-requested-with'
      //'Access-Control-Allow-Credentials': true // only required if you use cookies or other authentication
    },
    body: JSON.stringify(payload)
  }
}
function generateError(code, err) {
  return {
    statusCode: code,
    headers: {
      'Access-Control-Allow-Origin': '*',
      //'Access-Control-Allow-Headers': 'x-requested-with'
      //'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(err.message)
  }
}

function generateEmailParamsFromJSON(body) {
  const { email, name, content } = JSON.parse(body)
  if (!(email && name && content)) {
    throw new Error('Missing parameters! Make sure to add parameters \'email\', \'name\', \'content\'.')
  }

  return {
    Source: mySender,
    Destination: { ToAddresses: [myRecipient] },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `Message sent from email ${email} by ${name} \nContent: ${content}`
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `New message from ${myDomain} contact form!`
      }
    }
  }
}

async function sendJSON(event) {
  try {
    /* let origin = event.headers['Origin'];
    if (origin === myDomain || myDomain_www) { */
    const emailParams = generateEmailParamsFromJSON(event.body);
    const data = await ses.sendEmail(emailParams).promise();

    /* const emailParams2 = generateEmailParamsFromJSON(data);
    const ses_resp = await ses.sendEmail(data).promise(); */

    return generateResponse(200, data);
    // }
  } catch (err) {
    return generateError(500, err)
  }
}

// Content-Type: application/json
// The event.body needs to be a JSON object with 3 properties
// - email
// - name
// - content
module.exports.sendMail = sendJSON;
