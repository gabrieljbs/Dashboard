import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-horizontal-bar',
  standalone: true,
  imports: [],
  templateUrl: './horizontal-bar.component.html',
  styleUrl: './horizontal-bar.component.scss',
})
export class HorizontalBarComponent implements OnInit {
  ngOnInit() {
    new Chart('horizontal-bar', {
      type: 'bar',
      data: {
        labels: ['CLT', 'Horista', 'Temporário', 'Terceirizado'],
        datasets: [{ label: 'Contração', data: [10,1,2,4], borderWidth: 1 }],
      },
      options: {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Tipo de contratação',
          },
        },
      },
    });
  }
}
