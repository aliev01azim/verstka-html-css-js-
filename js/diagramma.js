var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 16;

var speedData = {
  labels: ["3h", "6h", "9h", "12h", "15h", "18h", "21h","24h"],
  datasets: [{
    label: "чеки/за час",
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
      boxWidth: 0,
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
Chart.defaults.global.defaultFontSize = 16;

var speedData = {
  labels: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
  datasets: [{
    label: "чеки/за день ",
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
      boxWidth: 0,
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
Chart.defaults.global.defaultFontSize = 16;

var speedData = {
  labels: ["01", "02", "03", "04", "05", "06", "07","08", "09", "10", "11", "12"],
  datasets: [{
    label: "чеки/за мес",
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
      boxWidth: 0,
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
Chart.defaults.global.defaultFontSize = 16;

var speedData = {
  labels: ["Весна","Лето","Осень","Зима"],
  datasets: [{
    label: "чеки/за квартал",
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
      boxWidth: 0,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvaa, {
  type: 'line',
  data: speedData,
  options: chartOptions
});

// aaa

var speedCanvaaa = document.getElementById("speedCharrr");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 16;

var speedData = {
  labels: ["2020","2021","2022","2023","2024","2025"],
  datasets: [{
    label: "чеки/за год",
    data: ["1000000","4000000","2000000","4000000","3000000","2000000","4000000"],
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
      boxWidth: 0,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvaaa, {
  type: 'line',
  data: speedData,
  options: chartOptions
});

// buttons

document.querySelector('.chas').onclick=()=>{
  document.querySelector('.a1').style.display='block';
  document.querySelector('.a2').style.display='none'
  document.querySelector('.a3').style.display='none'
  document.querySelector('.a4').style.display='none'
  document.querySelector('.a5').style.display='none'
}
document.querySelector('.sutka').onclick=()=>{
    document.querySelector('.a2').style.display='block'
    document.querySelector('.a1').style.display='none';
    document.querySelector('.a3').style.display='none'
    document.querySelector('.a4').style.display='none'
    document.querySelector('.a5').style.display='none'
}
document.querySelector('.nedelya').onclick=()=>{
    document.querySelector('.a3').style.display='block'
    document.querySelector('.a1').style.display='none';
    document.querySelector('.a2').style.display='none'
    document.querySelector('.a4').style.display='none'
    document.querySelector('.a5').style.display='none'

}
document.querySelector('.квартал').onclick=()=>{
    document.querySelector('.a4').style.display='block'
    document.querySelector('.a1').style.display='none';
    document.querySelector('.a2').style.display='none'
    document.querySelector('.a3').style.display='none'
    document.querySelector('.a5').style.display='none'

}
document.querySelector('.год').onclick=()=>{
    document.querySelector('.a5').style.display='block'
    document.querySelector('.a1').style.display='none';
    document.querySelector('.a2').style.display='none'
    document.querySelector('.a3').style.display='none'
    document.querySelector('.a4').style.display='none'

}




// glavnaya

