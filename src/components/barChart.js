import Chart from 'chart.js'

export default function barChart(chart) {
  new Chart(chart, {

    type: 'bar',
    data: {
      labels: ["Safety", "Transportation", "Education", "Recreation"],
      datasets: [
        {
            label: "Neighborhood Average", //optional
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
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: Object.keys(scores).forEach(function(key){console.log(scores[key])}) // y-axis
        },
		{
            label: "NYC Average", //optional
            fillColor: "rgba(220,120,220,0.8)",
            strokeColor: "rgba(220,120,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [30, 90, 65, 81]
        }
    ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  })
}
