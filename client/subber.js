var zmq = require('zmq');
var subscriber = zmq.socket('sub');

//pass empty string to subscribe to all messages
subscriber.subscribe('');

subscriber.on('message', function(data) {
  var msg = JSON.parse(data);
  console.log(msg.pid + ':' + new Date(msg.timestamp));
})

subscriber.connect("tcp://localhost:5432");
