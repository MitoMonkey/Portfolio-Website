# Portfolio website

## Screenshot
![Screenshot](./img/Screenshots/Screenshot_Portfolio.png)

## Production version
[View page here: mitothis.de](https://mitothis.de/)

This project started as a static website to learn HTML and CSS, but turned into a full-grown portfolio website.

## Built with
For practice reasons I chose to refrain from rebuilding it using libraries or build tools, so every line of code here is hand-written HTML, CSS and JavaScript.

### Contact form
To protect my email address from spam bots I created a AWS API and a AWS lamda function which is evoked upon submission of the contact form. It sends me an email with the form content through AWS SES. 
Since I want to receive the email in my google mail inbox, I had to use a second email address as the sender address, because google mail hides emails sent and received by the same account.