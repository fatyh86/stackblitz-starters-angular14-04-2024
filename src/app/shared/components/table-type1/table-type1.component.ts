import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table-type1',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './table-type1.component.html',
  styleUrl: './table-type1.component.scss',
})
export class TableType1Component {
  items = ['salut', 'vlad', 'andy'];
  // MENU test
  isMenuOpen = '';

  toggleMenu(item: any): void {
    console.log(item);

    // this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen != item) {
      this.isMenuOpen = item;
    } else {
      this.isMenuOpen = '';
    }
  } //menu test
}
