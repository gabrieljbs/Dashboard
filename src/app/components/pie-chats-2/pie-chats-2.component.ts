import { Component } from '@angular/core';
import {Chart, registerables} from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-pie-chats-2',
  standalone: true,
  imports: [],
  templateUrl: './pie-chats-2.component.html',
  styleUrl: './pie-chats-2.component.scss'
})
export class PieChats2Component {
  ngOnInit() {
    new Chart('pie2', {
      type: 'pie',
      data: {
        labels: ['18-25', '26-35', '36-45', '46-55', '56-65'],
        datasets: [{
          label: 'Faixa etária',
          data: [12, 19, 3, 5, 2,],
        }]
      },
      options: {
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Faixa etária',
          },
        },
      }
    });
  }
}