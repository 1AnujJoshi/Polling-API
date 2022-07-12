const express = require('express');
const db = require('./config/mongoose');
const port = process.env.PORT || 8000;
const app = express();

app.use(express.urlencoded({ extended: false }));

// use express router
app.use('/', require('./routes'));
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
