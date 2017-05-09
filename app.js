var express = require('express');

var app = express();
var cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log(req.body);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});