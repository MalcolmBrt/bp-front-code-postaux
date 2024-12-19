import { TestBed } from '@angular/core/testing';

import { LocalitesService } from './localites.service';

describe('LocalitesService', () => {
  let service: LocalitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
