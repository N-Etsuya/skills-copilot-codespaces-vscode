// Create web server
// Create a route to handle comments
// Create a route to handle form submission
// Create a route to handle form submission
// Create a route to handle form submission

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/comments', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'comments.html'));
});

app.post('/comments', (req, res) => {
  const name = req.body.name;
  const comment = req.body.comment;
  const data = `${name}: ${comment}\n`;

  fs.appendFile('./comments.txt', data, (err) => {
    if (err) {
      console.error(err);
    } else {
      res.sendFile(path.join(__dirname, 'public', 'comments.html'));
    }
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});