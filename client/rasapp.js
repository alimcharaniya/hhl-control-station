var socket = require("socket.io-client")("http://localhost:8080");
var gpio = require("rpi-gpio");

//start up code
process.on("SIGINT", function(){
  gpio.write(12, true, function(){
    gpio.destroy(function(){
      process.exit();
    });
  });
});

gpio.setup(12, gpio.DIR_OUT, function(){
  gpio.write(12, false); //turns led off
});


socket.on("connect", function(){
  console.log("connected to server");

  socket.on("stateChanged", function(state){
    console.log("new state is: " + state);
    gpio.write(12, state); //writes to pin 12 the state of the checkbox
  });
});
