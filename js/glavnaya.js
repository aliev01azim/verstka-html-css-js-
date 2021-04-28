Highcharts.chart('container', {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
        }
    },

    title: {
        text: '2020-2021'
    },

    xAxis: {
        categories: ['Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь','Январь', 'Февраль', 'Март', 'Апрель', 'Май','Июнь','Июль','Август'],
        labels: {
            skew3d: true,
            style: {
                fontSize: '14px'
            }
        }
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            skew3d: true
        }
    },

    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
    },

    plotOptions: {
        column: {
            stacking: 'normal',
            depth: 40
        }
    },

    series: [{
        name: 'Отток',
        data: [5, 23, 44, 67, 94],
    }, {
        name: 'Пролонгировано',
        data: [31, 24, 14, 25, 5],
    }, {
        name: 'Истекают',
        data: [2, 35, 6, 22, 51],
    }]
});



// 2

var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'containerк',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    title: {
        text: '2020-2021'
    },
    subtitle: {
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        data: [99.9, 71.5, 156.4, 259.2, 344.0, 326.0, 435.6, 548.5, 216.4, 194.1, 195.6, 254.4]
    }],
    xAxis:{
        categories: ['Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь','Январь', 'Февраль', 'Март', 'Апрель', 'Май','Июнь','Июль','Август']
}
});

// 33
// var data = [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3, 2.5, 3, 3.4, 3];

// Highcharts.chart('containerd', {
//     title: {
//     },

//     xAxis: [{
//         alignTicks: false
//     },{
//         alignTicks: false,
//         opposite: true
//     },{
//     categories: ['Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь','Январь', 'Февраль', 'Март', 'Апрель', 'Май','Июнь','Июль','Август']
//     }],
//     yAxis: [{
//     }, {
//         opposite: true
//     }],

//     plotOptions: {
//         histogram: {
//             accessibility: {
//                 pointDescriptionFormatter: function (point) {
//                     var ix = point.index + 1,
//                         x1 = point.x.toFixed(3),
//                         x2 = point.x2.toFixed(3),
//                         val = point.y;
//                     return ix + '. ' + x1 + ' to ' + x2 + ', ' + val + '.';
//                 }
//             }
//         }
//     },

//     series: [{
//         name: 'Histogram',
//         type: 'histogram',
//         xAxis: 1,
//         yAxis: 1,
//         baseSeries: 's1',
//         zIndex: -1
//     }, {
//         name: 'Data',
//         type: 'scatter',
//         data: data,
//         id: 's1',
//         marker: {
//             radius: 1.5
//         }
//     }]
// });

// ASA

