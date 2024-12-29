const express = require('express');
const app = express();
let port = 3000;

function startServer() {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  })
  .on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is already in use, trying a different port...`);
      port++;
      startServer(); // Try again on a different port
    } else {
      console.error(`Failed to start server: ${err}`);
    }
  });
}

startServer();