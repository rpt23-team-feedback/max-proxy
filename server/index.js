const express = require('express');
const morgan = require('morgan');
const port = 6336;
const path = require('path');
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.static(__dirname + '/../client/'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


app.listen(port, () => {
  console.log(`dockside at port ${port}`);
});

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname + '/../client/index.html'));
});

module.exports = app;
