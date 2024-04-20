import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AsideMenuComponent } from './shared/menu-components/aside-menu/aside-menu.component';
import { TopNavMenuComponent } from './shared/menu-components/top-nav-menu/top-nav-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    AsideMenuComponent,
    TopNavMenuComponent,
  ],
})
export class AppComponent {
  title = 'royal3';
}
