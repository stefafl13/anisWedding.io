const ctx = document.getElementById('myChart').getContext('2d');
var star = new Image(20,20);
star.src = './assets/img/star.png';
var dot = new Image(20,20);
dot.src = './assets/img/dot-circle.png';

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', '', '', '', '', ''],
        datasets: [{
            data: [5, 5.3, 5.8, 5.6, 5.4, 6, 6.6, 6.5, 6.8, 7],
            pointRadius: [0, 3, 0, 0, 0, 4, 0, 0, 4, 0],
            backgroundColor: [
                'rgb(216, 212, 241)',
                '#585665',
                'rgb(216, 212, 241)',
                'rgb(216, 212, 241)',
                'rgb(216, 212, 241)',
                'rgb(66, 47, 189)',
                'rgb(216, 212, 241)',
                'rgb(216, 212, 241)',
                'rgb(216, 212, 241)',
                'rgb(216, 212, 241)'],
            borderColor: [
                'rgb(216, 212, 241)',
                '#585665',
                'rgb(216, 212, 241)',
                'rgb(216, 212, 241)',
                'rgb(216, 212, 241)',
                'rgb(66, 47, 189)',
                'rgb(216, 212, 241)',
                'rgb(216, 212, 241)',
                'rgb(216, 212, 241)',
                'rgb(216, 212, 241)'],
            borderWidth: 3,
            tension: 0.3,
            pointStyle: [
                'circle',
                'circle',
                'circle',
                'circle',
                'circle',
                dot,
                'circle',
                'circle',
                star],
        }]
    },
    options: {
        plugins: {
            legend: {
              display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const index = context.dataIndex;

                        let label = ''

                        if(index == 1){
                            label = 'TAE Junior Adv'
                        }else if(index == 5){
                            label = 'Working in fullstack skills'
                        }else if(index == 8){
                            label = 'TAE SSr'
                        }else{label = ''}
                        return label;
                    },
                },
                displayColors: false
            }
        },
        //events: [],
        scales: {
            x: {
                grid: {
                    drawBorder: false,
                    display: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grace: '5%',
                grid: {
                    drawBorder: false,
                    display: false
                },
                ticks: {
                    display: false
                }
            }
        }
    }
});