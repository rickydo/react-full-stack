const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// static file serving
app.use(express.static('public'));

// using middleware
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //extended allows us to send arrays and other data types

// wild card asterisk allows dynamic requests
// get | post | put | delete
app.get('/blog/*.html', (req, res) => {
  res.send('Hello World!');
});

app.route('/form')
  .get((req, res) => {
    // res.send('You would see a FORM');
    // __dirname returns the current directory
    res.sendFile(__dirname + '/private/form.html');
  })
  .post((req, res) => {
    res.send(req.body.name + ', This is the results');
  })

// add in error handling
// capture anything that wasnt captured yet
// this is why it's at the bottom after all the routes above
// there is no next to be called after this function
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find this page");
})

app.listen(3006, () => {
  console.log('We are running on port 3006');
})


// expressjs doesn't know what error is
