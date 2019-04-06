import { TestBed, inject } from '@angular/core/testing';

import { DetailsCustomerService } from './details-customer.service';

describe('DetailsCustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsCustomerService]
    });
  });

  it('should be created', inject([DetailsCustomerService], (service: DetailsCustomerService) => {
    expect(service).toBeTruthy();
  }));
});
