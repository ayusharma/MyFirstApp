var express = require('express');
var app = express();
var path = require('path');
app.set('port', (process.env.PORT || 5000));



app.set('trust proxy', 'loopback');
//js
app.use('/fontawesome', express.static(__dirname + '/fontawesome'));
//js
app.use('/scripts', express.static(__dirname + '/scripts'));
// css
app.use('/css', express.static(__dirname + '/css'));
// fonts
app.use('/images', express.static(__dirname + '/images'));
//images
app.use('/audio', express.static(__dirname + '/audio'));

app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, './')
  });
});

// any other routes:
app.all('/*', function(req, res, next) {
  res.sendFile('index.html', {
    root: path.join(__dirname, './/')
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
