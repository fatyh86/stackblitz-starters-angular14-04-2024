import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class service {
  apiUrl = 'http://127.0.0.1:8000/api/';
  // apiUrl = 'https://api.royalgaz.ro/api/';

  Url = this.apiUrl + 'persoane';

  auth_token = localStorage.getItem('token');
  headers = new HttpHeaders({
    Content_Type: 'application/json',
    Authorization: 'Bearer ' + this.auth_token,
  });

  constructor(private http: HttpClient, private store: Store) {}

  __getAllTableNames() {
    let Url = this.apiUrl + 'general/alltables';
    return this.http.get(Url, { headers: this.headers });
  }
}
