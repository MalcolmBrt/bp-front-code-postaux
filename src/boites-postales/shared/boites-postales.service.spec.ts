import { TestBed } from '@angular/core/testing';

import { BoitesPostalesService } from './boites-postales.service';

describe('BoitesPostalesService', () => {
  let service: BoitesPostalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoitesPostalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
