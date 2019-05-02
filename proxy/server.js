require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/albums/:id', express.static(path.join(__dirname, 'public')));

app.get('/loaderio-8c90853dfafd879a8ca56f9fedf20e57', (req, res) => {
  const filePath = path.join(__dirname, './loaderio-8c90853dfafd879a8ca56f9fedf20e57.txt')
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`server running at port: ${port}`);
});