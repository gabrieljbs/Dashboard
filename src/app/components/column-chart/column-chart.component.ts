import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-column-chart',
  standalone: true,
  imports: [],
  templateUrl: './column-chart.component.html',
  styleUrl: './column-chart.component.scss',
})
export class ColumnChartComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    new Chart('column', {
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
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Admissão x Contratação',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },        
      },
      
    });

  }
}
