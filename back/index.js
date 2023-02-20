const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.end();
});

app.listen(PORT, (req, res) => {
  res.setHeader(`Access-Control-Allow-Origin','http://localhost:${PORT}`);

  console.log(`Server started on port ${PORT}`);
});