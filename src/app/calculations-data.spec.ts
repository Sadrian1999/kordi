import { TestBed } from '@angular/core/testing';

import { CalculationsData } from './calculations-data';

describe('CalculationsData', () => {
  let service: CalculationsData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationsData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
