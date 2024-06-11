import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-pie-chards',
  standalone: true,
  imports: [],
  templateUrl: './pie-chards.component.html',
  styleUrl: './pie-chards.component.scss'
})
export class PieChardsComponent implements OnInit{
  ngOnInit() {
    new Chart('pie', {
      type: 'doughnut',
      data: {
        labels: ['Amarela', 'Brancos', 'Indigena', 'Parda', 'Preto', 'Sem declaração'],
        datasets: [{
          label: 'Composição étnica',
          data: [12, 19, 3, 5, 2, 3],
        }]
      },
      options: {
      }
    });
  }
}
