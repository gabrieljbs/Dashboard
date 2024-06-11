import { Component } from '@angular/core';
import { ColumnChartComponent } from '../../components/column-chart/column-chart.component';
import { PieChardsComponent } from '../../components/pie-chards/pie-chards.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardsComponent } from '../../components/cards/cards.component';
import { LineChardsComponent } from '../../components/line-chards/line-chards.component';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { ColumnHorizontalChartsComponent } from '../../components/column-horizontal-charts/column-horizontal-charts.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ColumnChartComponent,
    PieChardsComponent,
    MatGridListModule,
    CardsComponent,
    MatCardModule,
    LineChardsComponent,
    MatDividerModule,
    ColumnHorizontalChartsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  items = [
    { title: 'Funcionarios Ativos', label: '5.000' },
    { title: 'Contratação', label: '1.000' },
    { title: 'Demições', label: '70' },
    { title: 'Feminino', label: '50%' },
    { title: 'Masculino', label: '50%' },
  ];
}
