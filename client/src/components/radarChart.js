import Chart from 'chart.js'

export default function radarChart(ctx, keys, scoreData) {
  new Chart(ctx, {
    type: 'radar',

    data: {
      labels: keys,
      datasets: [{
        label: 'Scores',
        data: scoreData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scale: {
        ticks: {
          display: false,
          beginAtZero: true
        }
      },
      scales: {
        yAxes: [{
          display: false,
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  })
}
