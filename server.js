var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var util = require("util");

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

var dir = path.join(__dirname, 'public');
app.use(express.static(dir));

io.on('connection', function(socket){
	util.log("New player has connected: "+socket.id);
	
    socket.on('testSend', function(msg){
		io.emit('testReturn', msg);
	});
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
