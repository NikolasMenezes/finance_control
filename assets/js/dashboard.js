import { defineTheme } from './utils/theme.js'

const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Gastos', 'Receita'],
        datasets: [{
            data: [90, 10],
            borderWidth: 1
        }],
        colors: ['#ff0000', "#0000ff"]
    },
    options: {
        responsive: false,

    }
});



defineTheme()