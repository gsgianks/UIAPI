import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsCustomerService {

  constructor(private http: HttpClient) { }

  getCustomerById(id: number): Observable<Customer>{
    return this.http.get<Customer>(`${environment.urlService}/customer/${id}`);
  }
}

