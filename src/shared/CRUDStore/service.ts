import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { get_action } from './actions';
import { allData } from './selector';
import { Observable, tap } from 'rxjs';

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

  Get_Actions(db_name: string[]) {
    // de rezolvat - verifica store daca nu a fost preluat deja

    db_name.forEach((element) => {
      this.store.dispatch(get_action({ db_name: element }));
    });
  }

  // POST new
  __postNew(data: any, db_name: string) {
    let Url = this.apiUrl + db_name;
    return this.http.post(Url, data);
    // return this.http.post(Url, data, {
    //   headers: this.headers,
    // });
  }

  // Edit
  __edit(data: any) {
    console.log(data);

    const Url_id = this.Url + '/' + data.id;
    return this.http.put(Url_id, data, {
      headers: this.headers,
    });
  }

  // GET ALL
  __get(db_name: any) {
    let Url = this.apiUrl + db_name;
    return this.http.get(Url, { headers: this.headers });
  }

  // GET s by ID
  __get_id(id: number) {
    const Url_id = this.Url + '/' + id;
    return this.http.get(Url_id, { headers: this.headers });
  }

  // Filter by column value
  __filterByColumn(db_name: any, column: string, value: any) {
    let Url = this.apiUrl + db_name + '/search/' + column + '/' + value;
    return this.http.get(Url, { headers: this.headers });
  }

  __getAllTableNames() {
    let Url = this.apiUrl + 'alltables';
    return this.http.get(Url, { headers: this.headers });
  }

  // preiaFiltru(mat:any): Observable<any> {
  //   let apiUrl5 = this.apiUrl + '/'+mat;
  //   return this.http.get(apiUrl5, { headers: this.headers});
  // }

  // scrieComanda(comanda: any) {
  //   return this.http.post(this.apiUrl0, comanda, { headers: this.headers})
  // }

  // preiaComanda(): Observable<any> {
  //   return this.http.get(this.apiUrl0, { headers: this.headers});
  // }
}
