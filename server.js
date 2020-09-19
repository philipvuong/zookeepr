const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');

const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3002

const app = express();

// below 2 are always needed for accepting POST data
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// create virtual path between location of file and directory given
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});