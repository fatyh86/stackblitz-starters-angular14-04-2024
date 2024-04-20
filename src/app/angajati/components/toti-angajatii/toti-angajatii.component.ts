import { Component, OnInit, inject } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { service } from "../../../shared/CRUDStore/service";
import { Observable, filter, map } from "rxjs";
import { allData } from "../../../shared/CRUDStore/selector";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { post_action } from "../../../shared/CRUDStore/actions";

@Component({
  selector: "app-toti-angajatii",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./toti-angajatii.component.html",
  styleUrl: "./toti-angajatii.component.scss",
})
export class TotiAngajatiiComponent implements OnInit {
  store = inject(Store);
  service = inject(service);
  db_names = ["persoane", "tip_produs"];

  persoane$: Observable<any> | undefined;

  // TST ADD post
  fb = new FormBuilder();

  nnn = "nume_produs";
  registerForm = this.fb.group({
    [this.nnn]: [""],
    categorie: ["1", Validators.required],
    pret_um: ["2", Validators.required],
    pret_um1: ["3", Validators.required],
    pret_um2: ["4", Validators.required],
    um: ["buc", Validators.required],
    descriere: ["asd", Validators.required],
    cod_produs: ["124", Validators.required],
    obs: ["bau"],
  });

  jjj = [
    {
      type: "text",
      label: "Name",
      name: "name",
      value: "",
      validations: [
        {
          name: "required",
          validator: "required",
          message: "Name is required",
        },
      ],
    },
    {
      type: "email",
      label: "Email",
      name: "email",
      value: "",
      validations: [
        {
          name: "required",
          validator: "required",
          message: "Email is required",
        },
        {
          name: "pattern",
          validator: "email",
          message: "Invalid email format",
        },
      ],
    },
  ];
  dynamicForm: any;
  formBuilder = inject(FormBuilder);
  ngOnInit(): void {
    let formGroup: any = {};
    this.jjj.forEach((control) => {
      formGroup[control.name] = [control.value || ""];
    });
    console.log(formGroup);

    this.dynamicForm = this.fb.group(formGroup);

    // GET data for db_names
    this.service.Get_Actions(this.db_names);

    // asign data to Observable
    this.persoane$ = this.store
      .pipe(select(allData))
      .pipe(map((ddd: any) => ddd["tip_produs"]));

    //test add
  }
  aaa() {
    // const content: any = this.registerForm.getRawValue();
    const content: any = this.dynamicForm.getRawValue();
    console.log(content);

    // this.store.dispatch(post_action({ content, db_name: 'tip_produs' }));
  }
}
