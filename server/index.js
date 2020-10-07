const express = require('express');
const morgan = require('morgan');
const port = 6336;
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.static(__dirname + '/../client/'));


app.listen(port, () => {
  console.log(`dockside at port ${port}`);
});

module.exports = app;