import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './/customer-routing.module';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsCustomerComponent } from './details-customer/details-customer.component';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [CustomerListComponent, NewCustomerComponent, EditCustomerComponent, DetailsCustomerComponent], 
  entryComponents:[NewCustomerComponent, EditCustomerComponent, DetailsCustomerComponent]
})
export class CustomerModule { }
