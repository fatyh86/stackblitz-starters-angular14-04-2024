import { Component, OnInit, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getAllTabels_action } from '../../../AdminStore/actions';
import { allTablesName } from '../../../AdminStore/selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms-tables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forms-tables.component.html',
  styleUrl: './forms-tables.component.scss',
})
export class FormsTablesComponent implements OnInit {
  store = inject(Store);
  tablesName$!: Observable<any>;

  ngOnInit(): void {
    this.store.dispatch(getAllTabels_action());
    this.tablesName$ = this.store.pipe(select(allTablesName));
  }
}
