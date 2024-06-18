import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [
    MatSidenavModule,
    RouterOutlet,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss',
})
export class SideNavbarComponent {
  pages:any [] = [
    {
      name: 'Dashbord',
      path:'home',
      icon:'view_quilt'
    },
    {
      name: 'Colaboradores',
      path:'#',
      icon:'list'
    },
    {
      name: 'Relatorio',
      path:'#',
      icon:'assignment'
    },
  ];
}
