import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-line-chards',
  standalone: true,
  imports: [],
  templateUrl: './line-chards.component.html',
  styleUrl: './line-chards.component.scss'
})
export class LineChardsComponent implements OnInit{
  ngOnInit() {
    new Chart('line', {
      type: 'line',
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
        datasets: [{
          label: 'Índice de rotatividade',
          data: [12, 14 , 3, 5, 2, 3],
        }]
      },
      options: {
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Rotatividade',
          },
        },
      }
    });
  }
}
// Calculo do Turnover
// Indice  de rotatividade
// C = Contratados
// D = Demitidos
// T = Total de funcionarios
// 
// Turnover = ((C + D) / 2) / T