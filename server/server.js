const express = require('express');
const app = express();

const apiRouter = require('./routes/api.js');

const PORT = 3000;

// Handler for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handlers
app.use('/api', apiRouter);

// Catch-all route handler to return 404 error
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

// Express global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log, ' ', errorObj.err);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
