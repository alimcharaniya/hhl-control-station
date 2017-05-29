/*
 * The function drawGraph gets called once all the html and css are done processing to the page.
 * drawGraph() instantiates and draws the google chart then sets an interval, where every 1 second
 * new data is inserted and updates the chart (See updateChart and the setInterval that calls it)
 */
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawGraph);

function drawGraph() {
  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', 'Dogs');

  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  var options = {
    'title' : 'Position vs Time Chart - Testing Google Charts API',
    'height' : 500,
    'is3D' : true,
    hAxis: {
      title: 'Time'
    },
    vAxis: {
      title: 'Popularity'
    }
  };
  chart.draw(data, options);

  var dynamics = setInterval(updateChart, 250);
  var count = 0;

  function updateChart(){
    console.log(count);
    var x = [count, count+2];
    data.insertRows(count, [x]);
    chart.draw(data, options);

    count++

    if(count == 10)
      clearInterval(dynamics);

  }
}
