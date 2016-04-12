var express = require('express');
var multer = require('multer');
var app = express();
var upload = multer();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.single('file'), function (req,res){
  var size = formatBytes(req.file.size);
  res.json(size);
});

app.listen(8080, function() {
  console.log('Listening on port 8080...');
});

function formatBytes(bytes,decimals) {
   if(bytes == 0) return '0 Byte';
   var k = 1000; // or 1024 for binary
   var dm = decimals + 1 || 3;
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   var i = Math.floor(Math.log(bytes) / Math.log(k));
   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}