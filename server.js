const express = require('express');
const browserify = require('browserify');
const port = 5000;

const app = express();

app.get('/api', (req, res) => {
  res.set({ z: 'z' }).end();
});

app.get('/client.js', (req, res) => {
  const b = browserify();
  b.add('./client.js');
  res.setHeader('content-type', 'text/javascript');
  b.bundle().pipe(res);
});

app.use(express.static(__dirname + '/public'));

app.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
