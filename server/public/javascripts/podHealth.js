var heightMin = $("#levHeightMin");
var heightActual = $("#levHeightActual");
var heightMax = $("#levHeightMax");

var bv2Min = $("#bv2Min");
var bv2Actual = $("#bv2Actual");
var bv2Max = $("#bv2Max");


var LevitationHeight = {
  heightMinValue : .70,
  heightActualValue : .65,
  heightMaxValue : .99
}

var LateralStability = {
  status : true
}


function updateBVChart(LevitationHeight){
  $(heightMin).text(LevitationHeight.heightMinValue);
  $(heightActual).text(LevitationHeight.heightActualValue);
  $(heightMax).text(LevitationHeight.heightMaxValue);

}

if (LevitationHeight.heightActualValue < LevitationHeight.heightMinValue){
  $(heightActual).css("background-color","red");
  } else {
  $(heightActual).css("background-color","lawngreen");
}



updateBVChart(LevitationHeight);
