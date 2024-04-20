import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { allData, filterByColumn } from '../../../shared/CRUDStore/selector';
import { Observable, filter, map } from 'rxjs';
import { service } from '../../../shared/CRUDStore/service';
import {
  filter_bycolumn_action,
  post_action,
} from '../../../shared/CRUDStore/actions';

@Component({
  selector: 'app-add-angajati',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-angajati.component.html',
  styleUrl: './add-angajati.component.scss',
})
export class AddAngajatiComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  store = inject(Store);
  service = inject(service);
  fb = new FormBuilder();

  jjj: any[] = [];

  forms$: Observable<any> | undefined;
  dynamicForm: any;
  formGroup: any = {};

  db_names = ['forms'];
  form = 'tip_produs';
  ngOnInit(): void {
    // GET data for db_names
    this.service.Get_Actions(this.db_names);
    this.store.dispatch(
      filter_bycolumn_action({
        column: 'db_name',
        value: 'tip_produs',
        db_name: 'forms',
      })
    );
    // asign data to Observable
    this.forms$ = this.store.pipe(select(filterByColumn));
    // .pipe(map((ddd: any) => ddd[this.db_names[0]]));

    // let formGroup: any = {};
    //test subscribe
    this.forms$.subscribe((control) => {
      // return (this.formGroup[control.name] = '');
      // return (this.jjj = control);
      control.map((ccc: any) => (this.formGroup[ccc.name] = [ccc.value || '']));
      this.dynamicForm = this.fb.group(this.formGroup);
    });
    // console.log('jjj', this.jjj);

    // Create forms
    // this.jjj.forEach((control) => {
    //   // validators
    //   let controlValidators: any = [];
    //   // if (control.validations) {
    //   //   control.validations.forEach((validation) => {
    //   //     if (validation.validator === 'required')
    //   //       controlValidators.push(Validators.required);
    //   //     if (validation.validator === 'email')
    //   //       controlValidators.push(Validators.email);
    //   //     // Add more built-in validators as needed
    //   //   });
    //   // }
    //   formGroup[control.name] = [control.value || '', controlValidators];
    // });
    // console.log(formGroup);

    // this.dynamicForm = this.fb.group(this.formGroup);
  }

  onSubmit() {
    // console.log(this.dynamicForm.value);
    const content: any = this.dynamicForm.getRawValue();
    console.log(content);

    this.store.dispatch(post_action({ content, db_name: 'tip_produs' }));
  }
  getErrorMessage(control: any) {
    const formControl = this.dynamicForm.get(control.name);
    for (let validation of control.validations) {
      if (formControl?.hasError(validation.name)) {
        return validation.message;
      }
    }
    return '';
  }
}
