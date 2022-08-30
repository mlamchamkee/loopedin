const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/',
  (req, res) => res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
)

// Global error handling middleware
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

/**
 * start server
 */
 app.listen(PORT, () => {
    console.log(`Server listening on port: http://localhost:${PORT}`);
  });
  
  module.exports = app;