anychart.onDocumentReady(function () {
  
  // add data
  var data = [
    ["JAN", 90, 87, 96],
    ["FEB", 96, 88, 91],
    ["MARCH", 87, 80, 70],
    ["April", 88, 71, 80],
    ["May", 99, 92, 70],
    ["June", 70, 75, 81],
    ["July", 77, 86, 81],
    ["August", 68, 89, 71],
    ["September", 80, 70, 84],
    ["October", 90, 81, 75],
    ["November", 97, 83, 86],
    ["December", 80, 74, 77],
  ];
  
  // create a data set
  var dataSet = anychart.data.set(data);

  // map the data for all series
  var firstSeriesData = dataSet.mapAs({x: 0, value: 1});
  var secondSeriesData = dataSet.mapAs({x: 0, value: 2});
  var thirdSeriesData = dataSet.mapAs({x: 0, value: 3});

  // create a line chart
  var chart = anychart.line();

  // create the series and name them
  var firstSeries = chart.line(firstSeriesData);
  firstSeries.name("Rice");
  var secondSeries = chart.line(secondSeriesData);
  secondSeries.name("Corn");
  var thirdSeries = chart.line(thirdSeriesData);
  thirdSeries.name("Cane");

  // add a legend
  chart.legend().enabled(true);
  
  // add a title
  chart.title("Monthly Data");
  
  // specify where to display the chart
  chart.container("container");
  
  // draw the resulting chart
  chart.draw();
  
});