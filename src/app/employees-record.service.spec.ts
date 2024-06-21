import { TestBed } from '@angular/core/testing';

import { EmployeesRecordService } from './employees-record.service';

describe('EmployeesRecordService', () => {
  let service: EmployeesRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
