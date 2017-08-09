var zmq = require('zmq');
var publisher = zmq.socket('pub');

//Emit a message
setInterval(function(){
  var msg = {
    pid: process.pid,
    timestamp: Date.now()
  };
  publisher.send(JSON.stringify(msg));
}, 1000);

publisher.bind('tcp://*:5432', function(err){
  console.log("Listening for zmq subscribers...");
});
