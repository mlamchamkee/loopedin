const path = require('path');
const express = require('express');
const controller = require('./controllers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

const PORT = 3000;

app.get('/',
  (req, res) => res.status(200).sendFile(path.join(__dirname, '../client/index.html')),
);

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/bios',
  controller.getAllBios,
  (req, res) => res.status(200).json(res.locals.bios),
);

app.get('/search/:skill',
  controller.findBios,
  (req, res) => res.status(200).json(res.locals.bios),
);

app.post('/bios',
  controller.addBio,
  (req, res) => res.status(201).json(res.locals.newBio),
);

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
