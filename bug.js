const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon error: This code will work fine most of the time, but it can fail if port 3000 is already in use. This is an example of a race condition that is difficult to replicate.