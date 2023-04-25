import { TestBed } from '@angular/core/testing';

import { SubventionService } from './subvention.service';

describe('SubventionService', () => {
  let service: SubventionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubventionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
