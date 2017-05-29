/* This file is used primarily to update the fields on the index.html page
 * Fields are updated using the updateFields() function which takes in an object with the structure of `podMetrics` (See in code below.)
 *
 * Client is connected to a web socket, which is how this application will recieve updates.
 * The plan is to listen for an event and use the data from that event to update the fields on the page.
 *
*/

$("[name='deployWheels']").bootstrapSwitch();
$("[name='eddyBrake']").bootstrapSwitch();
$("[name='parkingBrake']").bootstrapSwitch();
$("[name='propulsion']").bootstrapSwitch();

var podMetrics = {
  podStatus: "Pre-Flight",
  tubePosition: {
    position: "5",
    velocity: "0",
    acceleration: "0"
  },
  positionTelemetry: {
   lateral: 0.10,
   levitation: 2.54,
   heightFR: 2.50,
   heightFL: 2.56,
   heightBR: 2.50,
   heightBL: 2.56,
   yaw: 2.56,
   roll: 2.56
  },
  batteryInfo: {
    batteryLevel: 40,
    voltage: 4.7,
    current: 55,
    batteryTemp: 34
  },
  exteriorCond: {
    pressure: 0.1,
    temperature: 57.7
  },
  interiorCond: {
    pressure: 14.56,
    temperature: 101.2
  },
  switchStatus: {
    deployWheel: false,
    eddyBrake: false,
    parkingBrake: false,
    propulsion: false
  }
}

var tubePositionPanel = document.querySelector('.tubePositionPanel');
var retroflectorPanel = document.querySelector('.reflectorPanel');
var positionTelemetryPanel = document.querySelector('.positionTelemetryPanel');
var switchContainer = document.querySelector('.switchContainer');
var batteryInfoPanel = document.querySelector('.batteryInfoPanel');
var exteriorPanel = document.querySelector('.exteriorPanel');
var interiorPanel = document.querySelector('.interiorPanel');
var podStatusField = document.querySelector('.podStatusField');

// Retroreflector Panel
var reflectorStatusField = retroflectorPanel.querySelector('.reflectorStatusField');
var reflectorCountField = retroflectorPanel.querySelector('.reflectorCountField');

// Tube Position Panel
var positionField = tubePositionPanel.querySelector('.positionField');
var velocityField = tubePositionPanel.querySelector('.velocityField');
var accelerationField = tubePositionPanel.querySelector('.accelerationField');

//  Position Telemetry Panel
var lateralOffsetField = positionTelemetryPanel.querySelector('.lateralOffsetField')
var levitationField = positionTelemetryPanel.querySelector('.levitationField')
var heightFRField = positionTelemetryPanel.querySelector('.heightFRField')
var heightFLField = positionTelemetryPanel.querySelector('.heightFLField')
var heightBRField = positionTelemetryPanel.querySelector('.heightBRField')
var heightBLField = positionTelemetryPanel.querySelector('.heightBLField')
var yawField = positionTelemetryPanel.querySelector('.yawField')
var rollField = positionTelemetryPanel.querySelector('.rollField')

// Switch Container
var deployWheels = switchContainer.querySelector("input[name='deployWheels']")
var eddyBrake = switchContainer.querySelector("input[name='eddyBrake']")
var parkingBrakeButton = switchContainer.querySelector("input[name='parkingBrake']")
var propulsionButton = switchContainer.querySelector("input[name='propulsion']")

// Battery Info Panel
var batteryLevel = batteryInfoPanel.querySelector('.batteryLevel');
var batteryLevelProgBar = batteryInfoPanel.querySelector('.batteryLevelProgBar');
var batteryLevelProgBarText = batteryInfoPanel.querySelector('.batteryLevelProgBarText');

var voltageField = batteryInfoPanel.querySelector('.voltageField');
var voltageFieldProgBar = batteryInfoPanel.querySelector('.voltageFieldProgBar');
var voltageFieldProgBarText = batteryInfoPanel.querySelector('.voltageFieldProgBarText');

var currentField = batteryInfoPanel.querySelector('.currentField');
var currentFieldProgBar = batteryInfoPanel.querySelector('.currentFieldProgBar');
var currentFieldProgBarText = batteryInfoPanel.querySelector('.currentFieldProgBarText');

var batteryTempField = batteryInfoPanel.querySelector('.batteryTempField');
var batteryTempFieldProgBar = batteryInfoPanel.querySelector('.batteryTempFieldProgBar');
var batteryTempFieldProgBarText = batteryInfoPanel.querySelector('.batteryTempFieldProgBarText');

// Exterior Panel
var extCondPressureField = exteriorPanel.querySelector('.extCondPressureField');
var extCondTempField = exteriorPanel.querySelector('.extCondTempField');

// Interior Panel
var intCondPressureField = interiorPanel.querySelector('.intCondPressureField');
var intCondTempField = interiorPanel.querySelector('.intCondTempField');

function updateFields(metrics) {
  // Reassign .innerText to update value of fields
  // Reassign .style.width to a new percentage to update progress bar widths
  // Reassign .check to a boolean value to change the switches/checkboxes

  // Pod Status
  podStatusField.innerText = metrics.podStatus;

  // Tube Position
  positionField.innerText = metrics.tubePosition.position;
  velocityField.innerText = metrics.tubePosition.velocity;
  accelerationField.innerText = metrics.tubePosition.acceleration;

  // Position Telemetry
  lateralOffsetField.innerText = metrics.positionTelemetry.lateral;
  levitationField.innerText = metrics.positionTelemetry.levitation;
  heightFRField.innerText = metrics.positionTelemetry.heightFR;
  heightFLField.innerText = metrics.positionTelemetry.heightFL;
  heightBRField.innerText = metrics.positionTelemetry.heightBR;
  heightBLField.innerText = metrics.positionTelemetry.heightBL;
  yawField.innerText = metrics.positionTelemetry.yaw;
  rollField.innerText = metrics.positionTelemetry.roll;

  // Switch Container
  deployWheels.checked = metrics.switchStatus.deployWheel;
  eddyBrake.checked = metrics.switchStatus.eddyBrake;
  parkingBrakeButton.checked = metrics.switchStatus.parkingBrake;
  propulsionButton.checked = metrics.switchStatus.propulsion;

  // Battery Info
  batteryLevel.innerText = metrics.batteryInfo.batteryLevel;
  batteryLevelProgBarText.innerText = metrics.batteryInfo.batteryLevel;
  batteryLevelProgBar.style.width = metrics.batteryInfo.batteryLevel + "%";

  voltageField.innerText = metrics.batteryInfo.voltage;
  voltageFieldProgBarText.innerText = metrics.batteryInfo.voltage;
  voltageFieldProgBar.style.width = metrics.batteryInfo.voltage + "%";

  currentField.innerText = metrics.batteryInfo.current;
  currentFieldProgBarText.innerText = metrics.batteryInfo.current;
  currentFieldProgBar.style.width = metrics.batteryInfo.current + "%";

  batteryTempField.innerText = metrics.batteryInfo.batteryTemp;
  batteryTempFieldProgBarText.innerText = metrics.batteryInfo.batteryTemp;
  batteryTempFieldProgBar.style.width = metrics.batteryInfo.batteryTemp + "%";

  // Exterior Panel
  extCondPressureField.innerText = metrics.exteriorCond.pressure;
  extCondTempField.innerText = metrics.exteriorCond.temperature;

  // Interior Panel
  intCondPressureField.innerText = metrics.exteriorCond.pressure;
  intCondTempField.innerText = metrics.exteriorCond.temperature;
};

updateFields(podMetrics)



// Socket IO
var socket = io.connect('/');

//testing socketIO with checkbox
$("#testCheckbox").change(function(){
  console.log("CHANGED");
  socket.emit("stateChanged", this.checked);
});


//when retroreflector value is ready, update front end
//if retrorflector fires, play sound
var marioSound = new Audio('/sounds/mario.mp3');
socket.on('updateRetroValue', function(id, data){
  if (id == 1){
    reflectorStatusField.innerText = 'YES';
    marioSound.play();
  } else {
    reflectorStatusField.innerText = 'NO';
  }
  reflectorCountField.innerText = data;
});

//front end test code for ultrasonic ping sensor
var posField = document.querySelector('.positionField');
socket.on('updateRange', function(data, time) {
  let currTime = new Date().toISOString()

  console.log(data);
  let pyTime = parseFloat(time.substr(17))
  let jsTime = parseFloat(currTime.substr(17))
  console.log("rPi: " + pyTime);
  console.log("client: " + jsTime);
  console.log("Latency: " + ((jsTime - pyTime)*100) + "ms");

  posField.innerText = data
});

//Pod command buttons-- send state value to server.

//deploy wheels
$(deployWheels).on('switchChange.bootstrapSwitch' ,function(){
  if (this.checked){
    console.log('deploy wheels: true');
    socket.emit('deployWheelsEngage', this.checked);
  }
});

//eddy brake
$(eddyBrake).on('switchChange.bootstrapSwitch' ,function(){
  if (this.checked){
    console.log('eddy brake: true');
    socket.emit('eddyBrakeEngage', this.checked);
  }
});

//parking brake
$(parkingBrakeButton).on('switchChange.bootstrapSwitch' ,function(){
  if (this.checked){
    console.log('parking brake: true');
    socket.emit('parkingBrakeEngage', this.checked);
  }
});

// engage propolusion
$(propulsionButton).on('switchChange.bootstrapSwitch' ,function(){
  console.log("hello");
  if (this.checked){
    console.log('propulsion: true');
    socket.emit('propulsionEngage', this.checked);
  }
});

// EMERGENCY STOP BUTTON
$('#emergencyButton').on('click' ,function(){
  console.log('EMERGENCY STOP CLICKED');
  socket.emit('emergencyStop');
});
