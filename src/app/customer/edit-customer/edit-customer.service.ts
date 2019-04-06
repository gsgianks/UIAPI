import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditCustomerService {

  constructor(private http: HttpClient) { }

  getCustomerById(id: number): Observable<Customer>{
    return this.http.get<Customer>(`${environment.urlService}/customer/${id}`);
  }

  editCustomer(data: Customer): Observable<Response>{
    return this.http.put(`${environment.urlService}/customer`, data)
      .pipe(
        map((response: any)=>response)
      )
  }
}
