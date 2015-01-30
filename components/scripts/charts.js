var chartheight = 400;
var legendFontSize = 14;

      google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawIncomeChart);
      function drawIncomeChart() {
        var data = google.visualization.arrayToDataTable([
          ['Education', 'Income'],
          ['Professional degree',  89.128],
          ['Doctoral degree',  84.396],
          ["Master's degree",  69.108],
          ["Bachelor's degree",  57.616],
          ["Associate's degree",  40.404],
          ["Some college",  37.804],
          ["High school",  33.852],
          ["Less than high school", 24.544]

        ]);

        var options = {
          hAxis: {title: 'Thousands', format: "$0"},
          height: chartheight,
          chartArea: {height: '85%', width: '50%', left: '40%', top: '5%'},
          fontName: 'Roboto',
          fontSize: 16,
          legend: { position: 'none' }

        };

        var chart = new google.visualization.BarChart(document.getElementById('income_chart'));

        chart.draw(data, options);
      }//IncomeChart

    google.setOnLoadCallback(drawJobsChart);
      function drawJobsChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year','High school diploma','Some college',"Associate's degree","Bachelor's degree","Master's degree or higher"],
          ['2010',38.820,25.260,15.390,35.060,14.720],
          ['2020',38.790,29.460,19.480,40.200,17.490]
        ]);

        var options = {
          vAxis: {title: 'Millions', format: "0"},
          height: chartheight,
          chartArea: {width: "55%", left: '15%', height: '80%', top: '8%'},
          fontName: 'Roboto',
          fontSize: 16,
          legend: { position: 'right', textStyle: {fontSize: legendFontSize}  },
          isStacked: true, 

        };

        var chart = new google.visualization.ColumnChart(document.getElementById('jobs_chart'));

        chart.draw(data, options);
      }//JobsChart

    google.setOnLoadCallback(drawHSGradsChart);
      function drawHSGradsChart() {
        var data = google.visualization.arrayToDataTable([
          ['Race','Grads'],
          ['White',1820],
          ['Black',413],
          ['Hispanic',697],
          ['Other',273],
        ]);

        var options = {
          pieHole: 0.5,
          height: chartheight,
          chartArea: {width: '100%',top: "5%", height: '80%'},
          fontName: 'Roboto',
          fontSize: 16,
          legend: { maxLines: 2, position: 'bottom', textStyle: {fontSize: legendFontSize} },
          pieSliceText: 'value'

        };

        var chart = new google.visualization.PieChart(document.getElementById('hsgrads_chart'));

        chart.draw(data, options);
      }//HS Grads Chart

  google.setOnLoadCallback(drawReadyChart);
      function drawReadyChart() {
        var data = google.visualization.arrayToDataTable([
          ['Subject','White','Black','Hispanic','All'],
          ['English',76,34,47,64],
          ['Math',52,14,29,43],
          ['Reading',54,17,29,37]

  
        ]);

        var options = {
          vAxis: {title: 'Percent College Ready', format: "0.0"},
          height: chartheight,
          chartArea: {width: "75%", left: '15%', height: '68%', top: '7%'},
          fontName: 'Roboto',
          fontSize: 16,
          legend: { position: 'bottom', textStyle: {fontSize: legendFontSize}  }

        };

        var chart = new google.visualization.ColumnChart(document.getElementById('ready_chart'));

        chart.draw(data, options);
      }//ReadyChart

google.setOnLoadCallback(drawCollegeGradChart);
      function drawCollegeGradChart() {
        var data = google.visualization.arrayToDataTable([
          ['College type','White','Black','Hispanic','Total'],
          ['4-year college',62.5,40.2,51.9,59.2],
          ['4-year open admissions',41.3,19.3,30.3,32.8],
          ['Community college',22.5,11.3,15.9,19.8]
  
        ]);

        var options = {
          vAxis: {title: 'Percent Complete within 150%', format: "0.0"},
          height: chartheight,
          chartArea: {width: "75%", left: '15%', height: '68%', top: '10%'},
          fontName: 'Roboto',
          fontSize: 16,
          legend: { position: 'bottom', textStyle: {fontSize: legendFontSize}  }

        };

        var chart = new google.visualization.ColumnChart(document.getElementById('collegegrad_chart'));

        chart.draw(data, options);
      }//CollegeGradChart

//smartresize
(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');


// usage:
$(window).smartresize(function(){
  drawIncomeChart();
  drawJobsChart();
  drawHSGradsChart();
  drawReadyChart();
  drawCollegeGradChart();
});
