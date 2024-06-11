import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  @Input() title: string | undefined;
  @Input() label: string | undefined;
}
