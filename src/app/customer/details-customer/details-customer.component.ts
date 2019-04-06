import { Component, OnInit, Inject } from '@angular/core';
import { DetailsCustomerService } from './details-customer.service';
import { Customer } from '../models/customer';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData{
  id: number;
}


@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.scss'], 
  providers: [DetailsCustomerService]
})
export class DetailsCustomerComponent implements OnInit {
  customer: Customer = new Customer();
  constructor(private service: DetailsCustomerService,public dialogRef: MatDialogRef<Customer>, @Inject(MAT_DIALOG_DATA) public data:DialogData ) { 
    this.customerRetrieved(data.id);
  }

  ngOnInit() {
  }

  customerRetrieved(id: number): void{
    this.service.getCustomerById(id)
      .subscribe(response =>{
        this.customer = response;
      })
  }

}
