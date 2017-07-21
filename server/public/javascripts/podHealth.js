//lev height selectors
var levHeightMin = $("#levHeightMin").text(".70");
var levHeightActual = $("#levHeightActual").text(".65");
var levHeightMax = $("#levHeightMax").text(".99");
//battery voltage
var bvMin = $("#bvin").text("20");
var bvActual = $("#bvActual").text("23.1");
var bvMax = $("#bvMax").text("26.4");
//battery temperature
var btMin = $("#btin").text("55");
var btActual = $("#btActual").text(".70");
var btMax = $("#btMax").text("140");
//int pressure
var ipMin = $("#ipMin").text("0");
var ipActual = $("#ipActual").text(".41");
var ipMax = $("#ipMax").text("1");
//int temp
var intMin = $("#intMin").text("20");
var intActual = $("#intActual").text("89");
var intMax = $("#ipMax").text("80");
//lat height
var latHeight = $("#latHeight").text("TRUE");

//metric values
var metrics = {
  LevitationHeight : {
    min : "70",
    actual : .65,
    max : .99
  },
  BatteryVoltage : {
    min: 20,
    actual:24.4,
    max: 26.4
  },
  BatteryTemperature : {
    min: 55,
    actual: 54,
    max: 140
  },
  InteriorPressure: {
    min: 0,
    actual: .76543,
    max: 1
  },
  InteriorTemp : {
    min: 20,
    actual: 82,
    max: 80
  },
  LateralStability : {
    status : true
  }
}

function updateBVChart(LevitationHeight){
  $(levHeightMin).text(metrics.LevitationHeight.min);
  $(levHeightActual).text(metrics.LevitationHeight.actual);
  $(levHeightMax).text(metrics.LevitationHeight.max);

}


$(ipActual).css("background-color","lawngreen");
$(bvActual).css("background-color","lawngreen");
$(btActual).css("background-color","lawngreen");
$(intActual).css("background-color","lawngreen");
$(latHeight).css("background-color","red");




updateBVChart(LevitationHeight);
