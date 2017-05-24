google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Dogs');
    var options = {
      hAxis: {
        title: 'Time'
      },
      vAxis: {
        title: 'Popularity'
      }
    };
    var count;
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);

    for(count = 0; count < 10; count++){
      var myVar = setInterval(dosomething, 1000);

      var x = [count, count+2];
      data.insertRows(count, [x]);
      chart.draw(data, options);
      function dosomething(){
        console.log(count);

      }
    }
}
