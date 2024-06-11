import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [
    MatSidenavModule,
    RouterOutlet,
    MatDividerModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss',
})
export class SideNavbarComponent {
  pages:any [] = [
    {
      name: 'Dashbord',
      path:'home'
    },
    {
      name: 'Colaboradores',
      path:'#'
    },
    {
      name: 'Dashbord',
      path:'#s'
    },
  ];
}
