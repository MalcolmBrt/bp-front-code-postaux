import { TestBed } from '@angular/core/testing';

import { CodePostauxService } from './codes-postaux.service';

describe('CodePostauxService', () => {
  let service: CodePostauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodePostauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});