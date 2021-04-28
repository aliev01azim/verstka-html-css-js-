var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
  labels: ["3h", "6h", "9h", "12h", "15h", "18h", "21h","24h"],
  datasets: [{
    label: "Car Speed (mph)",
    data: [500,2500,4000, 3500,1000,  1500, 2000,  3000,],
    backgroundColor: 'lightBlue',
    pointBorderColor: 'orange',
    pointBackgroundColor:'orange',
    pointRadius: 5,
    pointHoverRadius: 10,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    borderDash: [5, 5],
  }]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});
// aaa
var speedCanvass = document.getElementById("speedChartt");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
  labels: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
  datasets: [{
    label: "Car Speed (mph)",
    data: [5000,15000,20000,10000,20000,35000,25000,30000],
    backgroundColor: 'lightBlue',
    pointBorderColor: 'orange',
    pointBackgroundColor:'orange',
    pointRadius: 5,
    pointHoverRadius: 10,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    borderDash: [5, 5],
  }]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvass, {
  type: 'line',
  data: speedData,
  options: chartOptions
});

// aaa

var speedCanvasss = document.getElementById("speedCharttt");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
  labels: ["01", "02", "03", "04", "05", "06", "07","08", "09", "10", "11", "12"],
  datasets: [{
    label: "Car Speed (mph)",
    data: ["100000","300000","1100000","400000","600000","600000","700000","800000","500000","1000000","1200000","900000"],
    backgroundColor: 'lightBlue',
    pointBorderColor: 'orange',
    pointBackgroundColor:'orange',
    pointRadius: 5,
    pointHoverRadius: 10,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    borderDash: [5, 5],
  }]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvasss, {
  type: 'line',
  data: speedData,
  options: chartOptions
});
// aa

var speedCanvaa = document.getElementById("speedCharr");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var speedData = {
  labels: ["Весна","Лето","Осень","Зима"],
  datasets: [{
    label: "Car Speed (mph)",
    data: ["400000","1200000","800000","1600000"],
    backgroundColor: 'lightBlue',
    pointBorderColor: 'orange',
    pointBackgroundColor:'orange',
    pointRadius: 5,
    pointHoverRadius: 10,
    pointHitRadius: 30,
    pointBorderWidth: 2,
    borderDash: [5, 5],
  }]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvaa, {
  type: 'line',
  data: speedData,
  options: chartOptions
});