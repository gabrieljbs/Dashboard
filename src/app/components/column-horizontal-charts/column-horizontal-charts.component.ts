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
          'Janeiro',
          'Fevereio',
          'Março',  
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ],
        datasets: [
          {
            label: 'Contratação',
            data: [12, 19, 30, 50, 22, 30, 50, 12, 19, 30, 50, 10],
            borderWidth: 1,
          },
          {
            label: 'Demição',
            data: [130, 50, 12, 19, 30, 50, 10, 2, 19, 30, 50, 22],
            borderWidth: 1,
          },
        ],
      },
      options: {
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
