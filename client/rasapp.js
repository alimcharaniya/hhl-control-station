var socket = require("socket.io-client")("http://localhost:3000");

socket.on("connect", function(){
  console.log("connected to server");

  socket.on("stateChanged", function(state){
    console.log("new state is: " + state);

  });
});
