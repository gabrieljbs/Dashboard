import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-column-horizontal-charts',
  standalone: true,
  imports: [],
  templateUrl: './column-horizontal-charts.component.html',
  styleUrl: './column-horizontal-charts.component.scss',
})
export class ColumnHorizontalChartsComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    new Chart('column-h', {
      type: 'bar',
      data: {
        labels: [
          'Analista',
          'Auxiliar',
          'Assistente',
          'Estagio',
          'Coodernador',
          'Supervisor',
        ],
        datasets: [
          {
            label: 'Cargos',
            data: [12, 19, 30, 45, 22, 30],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Nível Hierárquico',
          },
        },
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
