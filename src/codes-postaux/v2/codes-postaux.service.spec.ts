import { TestBed } from '@angular/core/testing';

import { CodesPostauxService } from './codes-postaux.service';

describe('CodesPostauxService', () => {
  let service: CodesPostauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodesPostauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
