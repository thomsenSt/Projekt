import { TestBed } from '@angular/core/testing';

import { ApiZugriffService } from './api-zugriff.service';

describe('ApiZugriffService', () => {
  let service: ApiZugriffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiZugriffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
