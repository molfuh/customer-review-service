const express = require('express');
const app = express();

const PORT = 1111;

app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT);
})