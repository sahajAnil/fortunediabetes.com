import { TestBed } from '@angular/core/testing';

import { BookAppointmentServiceService } from './book-appointment-service.service';

describe('BookAppointmentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookAppointmentServiceService = TestBed.get(BookAppointmentServiceService);
    expect(service).toBeTruthy();
  });
});
